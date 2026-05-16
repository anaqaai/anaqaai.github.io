if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("./swshort.js")
            .then(function () {
                console.log("Service Worker Registered");
            })
            .catch(function (error) {
                console.log("Service Worker Failed:", error);
            });
    });
}
