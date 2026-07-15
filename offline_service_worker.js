// This makes your app installable and allows it to work offline!
const CACHE_NAME = 'trimble-kpi-v1';
const urlsToCache = [
  './trimble_sea_kpi_slides.html',
  './manifest.json',
  './GlobeR-Logo-Boxed-Blue10-RGB.png',
  './TrimbleR-Logo-Boxed-Blue10-RGB.png',
  './coverpage.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith