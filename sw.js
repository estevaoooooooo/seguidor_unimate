const CACHE='zrv-lap-timer-v2';
const ASSETS=['./?v=2','index.html','styles.css?v=2','app.js?v=2','manifest.webmanifest?v=2','assets/icon.svg?v=2'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(response=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin){const copy=response.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return response}).catch(()=>caches.match('./')))));

