// Service Worker for caching static assets
const CACHE_NAME = 'portfolio-v4';

// Files to cache - minimal set to avoid failures
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - cache resources with maximum error tolerance
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Use addAll with error handling
        return cache.addAll(urlsToCache).catch(error => {
          console.warn('Some resources failed to cache:', error);
          // Try to cache individually
          return Promise.all(
            urlsToCache.map(url => {
              return cache.add(url).catch(err => {
                console.warn(`Failed to cache ${url}:`, err);
              });
            })
          );
        });
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        // Fetch from network with timeout
        return fetch(event.request, {
          cache: 'default',
          mode: 'cors'
        }).then(networkResponse => {
          // Don't cache if response is not ok
          if (!networkResponse.ok) {
            return networkResponse;
          }

          // Clone the response for caching
          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        }).catch((error) => {
          console.warn('Network fetch failed:', error);
          // If both cache and network fail, try to serve index.html for navigation requests
          if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
          // Return a basic offline response
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});