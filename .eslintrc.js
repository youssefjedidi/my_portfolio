module.exports = {
  extends: ['react-app', 'react-app/jest'],
  globals: {
    self: 'readonly',
    caches: 'readonly',
    fetch: 'readonly',
    clients: 'readonly'
  },
  overrides: [
    {
      files: ['public/sw.js', 'build/sw.js', '**/*.sw.js'],
      env: {
        serviceworker: true,
        browser: true
      },
      globals: {
        self: 'readonly',
        caches: 'readonly',
        fetch: 'readonly',
        clients: 'readonly',
        navigator: 'readonly',
        console: 'readonly'
      },
      rules: {
        'no-restricted-globals': 'off'
      }
    }
  ]
};