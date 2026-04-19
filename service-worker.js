const CACHE_NAME = "k3d-cache-v1";

const urlsToCache = [
  "index.html",
  "AppK3D/logoindex/logo.jpeg",
  "AppK3D/background/sfondo/image.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
