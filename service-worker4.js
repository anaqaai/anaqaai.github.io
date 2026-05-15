const CACHE_NAME = "pwa-cache-v1";

const FILES_TO_CACHE = [

    "/",
    "/index4.html",
    "/style4.css",
    "/app4.js",
    "/manifest4.json",

    "/images/lightblue.jpg",
    "/images/lightgold.jpg",

    "/images/icon-192.png",
    "/images/icon-512.png"
];


// Install Service Worker

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

});


// Fetch files from cache

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request);

            })

    );

});