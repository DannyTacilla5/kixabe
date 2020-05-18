  self.addEventListener('install', function(e) {
    //console.log(e)
    e.waitUntil(
      caches.open('airhorner').then(function(cache) {
        return cache.addAll([
          './',
          'index.html',
          'styles.css'
        ]);
      })
    );
   });
