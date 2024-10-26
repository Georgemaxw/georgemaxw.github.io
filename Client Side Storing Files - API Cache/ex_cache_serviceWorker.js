
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('cache-name').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/ex_cache.css',
                '/ex_cache.js'
            ])
        })
    )
})
   
self.addEventListener('fetch', e => {

    console.log(e.request.url)

    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    )
})