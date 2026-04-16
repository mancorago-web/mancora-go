<<<<<<< HEAD
const CACHE_NAME = "mancora-go-v28";
=======
const CACHE_NAME = "mancora-go-v27";
>>>>>>> adeb23de7f1770426708d9ad40fac22647b74b4e

// Delete ALL old caches on activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
<<<<<<< HEAD
=======
        // Clone and cache new responses
>>>>>>> adeb23de7f1770426708d9ad40fac22647b74b4e
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
<<<<<<< HEAD
        return caches.match(event.request);
      })
  );
});
=======
        // Fallback to cache
        return caches.match(event.request);
      })
  );
});
>>>>>>> adeb23de7f1770426708d9ad40fac22647b74b4e
