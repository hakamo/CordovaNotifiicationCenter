// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

       

        window.pushe.initialize();


        window.pushe.getPusheId(function pidCallnack(pid) {
            //ons.notification.alert("pid is: " + pid);

            console.log(pid);

            window.pushe.sendAdvancedNotifToUser(pid, "{ \"title\":\"test\", \"content\":\"sent from client\" }");
        });

        $(document).bind('deviceready', app.onDeviceReady);
    };

    document.addEventListener("deviceready", deviceReady, true);

    function deviceReady() {
       // window.pushe.initialize();

        //ons.notification.alert('pushe inited!');
    }


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        ons.notification.alert("pid is: " + pid);
    };
})();



var app = {
    posts_url: "http://your.ip.goes.here:3000/posts/",

    onDeviceReady: function () {
        console.log('Device is ready');
        app.readPosts();
    },

    readPosts: function () {

        window.pushe.isPusheInitialized(function pusheInited(result) {
            if (result) {

                window.pushe.getPusheId(function pidCallnack(pid) {
                    //ons.notification.alert("pid is: " + pid);

                    window.pushe.sendAdvancedNotifToUser(pid, "{ \"title\":\"test\", \"content\":\"sent from client\" }");
                });


            }
        });
    }
};