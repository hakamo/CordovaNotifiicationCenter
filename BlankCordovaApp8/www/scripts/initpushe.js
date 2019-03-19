document.addEventListener("deviceready", deviceReady, true);

function deviceReady() {
    window.pushe.initialize();

    ons.notification.alert('pushe inited!');
}