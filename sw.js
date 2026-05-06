self.addEventListener('install', (e) => {
  console.log('Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  // Esto permite que la app funcione online/offline
  e.respondWith(fetch(e.request));
});
