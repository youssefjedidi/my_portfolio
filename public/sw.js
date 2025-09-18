// Service Worker for basic offline functionality
const CACHE_NAME = 'portfolio-v5';

// Install event - just skip waiting, no pre-caching
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

// Fetch event - serve from cache when possible, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Skip non-HTTP requests
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        // Fetch from network
        return fetch(event.request).then(networkResponse => {
          // Don't cache if response is not ok
          if (!networkResponse.ok) {
            return networkResponse;
          }

          // Only cache successful responses
          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        }).catch((error) => {
          console.warn('Network fetch failed:', error);
          // For navigation requests, try to serve the index page
          if (event.request.mode === 'navigate') {
            return caches.match('/').then(cachedResponse => {
              return cachedResponse || new Response('Offline', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            });
          }
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