var staticCacheName = 'crcalc-static-v4.1';
var contentImgsCache = 'crcalc-content-imgs';
var allCaches = [
  staticCacheName,
  contentImgsCache
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        // /\/*bundle.js$/,
        // '/*styles.css',
        //'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        //'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
    .then(()=> {
        console.log('skipping wait');
        self.skipWaiting()})
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
        console.log('cacheNames : ', cacheNames);
      return Promise.all(
        cacheNames.filter(function(cacheName) {
            console.log('cacheName', cacheName);
          return cacheName.startsWith('crcalc-') &&
                 !allCaches.includes(cacheName);
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);
  
  event.respondWith(
    caches.open(staticCacheName).then(cache=>{
      return cache.match(event.request).then(function(response) {
        return response || fetch(event.request).then(fetchResponse=>{
            if(fetchResponse) cache.put(event.request, fetchResponse.clone());
            
            return fetchResponse;
            });
        })
      })
    );
});