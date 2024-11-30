const CACHE_NAME = "v3";
const assets = ["/", "/index.html"];

async function caching() {
  const cache = await caches.open(CACHE_NAME);
  cache.addAll(assets);
}

async function respondFetch(request) {
  const cacheResponse = await caches.match(request);
  const networkResponse = await getNetworkResponse(request);

  return cacheResponse || networkResponse;
}

async function getNetworkResponse(request) {
  const networkRes = await fetch(request.url);
  const cache = await caches.open(CACHE_NAME);
  const isGoogleExtension = networkRes.url.includes("chrome-extension");

  if (isGoogleExtension) return networkRes;

  cache.put(request, networkRes.clone());
  return networkRes;
}

async function cacheAllRequests() {
  const cacheKeys = await caches.keys();
  const oldCacheKeys = cacheKeys.filter((key) => key !== CACHE_NAME);

  await Promise.all(oldCacheKeys.map((key) => caches.delete(key)));
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caching());
});

self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(cacheAllRequests());
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(respondFetch(event.request));
});
