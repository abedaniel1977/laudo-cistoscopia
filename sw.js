// Cache do app para funcionar sem internet. Aumente a versão a cada atualização.
const CACHE = "laudo-cistoscopia-v4";
const FILES = ["./", "index.html", "jspdf.umd.min.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Rede primeiro (pega atualizações), cache se estiver offline.
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); if (r.ok && new URL(e.request.url).origin === location.origin) caches.open(CACHE).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
