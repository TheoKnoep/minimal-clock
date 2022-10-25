

self.addEventListener("install", function (event) {
    caches.open('clock').then(function(cache) {
        return cache.addAll([
            './', 
            'index.html', 
            'app.js',
            'style.css', 
            'icon/icon_192x192.png', 
            'icon/icon_384x384.png', 
            'icon/icon_512x512.png'
        ]);
    });
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match(event.request)
                    .then(cachedResponse => {
                        return cachedResponse; 
                    }); 
            })
    )
})