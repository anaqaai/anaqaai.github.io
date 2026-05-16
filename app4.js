/* jshint esversion: 6 */

// Background changer

const backgroundSelect = document.getElementById("backgroundSelect");

backgroundSelect.addEventListener("change", function () {

    if (this.value === "blue") {

        document.body.style.backgroundImage =
            "url('images/lightblue.jpg')";

    }
    else if (this.value === "gold") {

        document.body.style.backgroundImage =
            "url('images/lightgold.jpg')";
    }
    else {

        document.body.style.backgroundImage = "none";
    }

});


// Local Storage

const usernameInput = document.getElementById("username");
const welcomeMessage = document.getElementById("welcomeMessage");

// Check if name already exists
window.addEventListener("load", () => {

    const savedName = localStorage.getItem("name");

    if (savedName) {

        usernameInput.value = savedName;

        welcomeMessage.textContent =
            "Welcome back, " + savedName + "!";
    }

});


// Save name after typing
usernameInput.addEventListener("change", () => {

    const name = usernameInput.value;

    localStorage.setItem("name", name);

    const retrievedName = localStorage.getItem("name");

    welcomeMessage.textContent =
        "Hello, " + retrievedName + "!";

});


// Register Service Worker

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker4.js")
            .then(() => {
                console.log("Service Worker Registered");
            });

    });

}
