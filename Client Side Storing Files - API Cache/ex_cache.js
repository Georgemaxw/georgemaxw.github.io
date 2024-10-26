
var h1 = document.querySelector('h1')

h1.textContent = 'Cache Example'

// Registra o service worker para controlar o funcionamento do site offline.

if('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('/Client Side Storing Files - API Cache/ex_cache_serviceWorker.js')
        .then(() => console.log('Service Worker Registrado!'))
}
