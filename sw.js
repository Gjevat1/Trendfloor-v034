const V='trendfloor-034';
const FILES=['./','index.html','zeit.js','kontakt.js','material.js','regie.js','jspdf.min.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/logo.jpg','icons/zeit.png','icons/mat.png','icons/regie.png','icons/fahrt.png','icon-192.png','icon-512.png','logo.jpg','logo.png','zeit.png','mat.png','regie.png','fahrt.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('index.html'))));});
