self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('clipmind-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html'
        '/clipminds.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}
