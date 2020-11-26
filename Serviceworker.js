const CACHE_NAME = 'Tea Paradise';
const CACHE_URLS =  ['index.html',                      
                     'css/normalize.css',
                     'scripts/main.js',
                     'css/Style.css'];
                   
self.addEventListener("install", function(event){
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                //add all URLs to cache
                return cache.addAll(CACHE_URLS);
        })
    );
});

  