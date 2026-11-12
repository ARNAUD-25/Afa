// Service worker minimal — sert surtout à rendre l'app "installable"
// (icône sur l'écran d'accueil). Ne fait pas de vrai cache hors-ligne
// pour l'instant : le contenu (produits, demandes...) a de toute façon
// besoin d'internet pour se mettre à jour en temps réel.

const CACHE_NAME = "afa-shell-v1";
const SHELL_FILES = ["./index.html", "./app.js", "./firebaseConfig.js", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Stratégie simple : réseau d'abord, cache en secours (utile si la connexion coupe un instant)
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
