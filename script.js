// Hamburger
let sidebar = document.getElementById("side");
let ham = document.getElementById("ham");
let signIn = document.getElementById("signInNav");

function HamOpen() {
    const hamburger = document.querySelector("#ham");
    if (hamburger.classList.contains("stage0")){
        sidebar.style.right = "0px";
        ham.classList.add("stage1");
        ham.classList.remove("stage0");
        ham.classList.add("fa-times");
        ham.classList.remove("fa-bars");
        ham.classList.remove("d-lg-none");
        signIn.classList.add("hide");
    } else if (hamburger.classList.contains("stage1")){
        sidebar.style.right = "-300px";
        ham.classList.add("stage0");
        ham.classList.remove("stage1");
        ham.classList.add("fa-bars");
        ham.classList.remove("fa-times");
        ham.classList.add("d-lg-none");
        signIn.classList.remove("hide");
    }
;}

// Service
let clean = document.getElementById("cleanInfo");
let laundry = document.getElementById("laundryInfo");
let pack = document.getElementById("packageInfo");

let cleanButton = document.getElementById("cleanButton");
let laundryButton = document.getElementById("laundryButton");
let packButton = document.getElementById("packageButton");


function cleanOpen() {
    clean.classList.remove("disable");
    cleanButton.classList.add("selected");
    laundry.classList.add("disable");
    laundryButton.classList.remove("selected");
    pack.classList.add("disable");
    packButton.classList.remove("selected");
}

function laundryOpen() {
    clean.classList.add("disable");
    cleanButton.classList.remove("selected");
    laundry.classList.remove("disable");
    laundryButton.classList.add("selected");
    pack.classList.add("disable");
    packButton.classList.remove("selected");
}

function packOpen() {
    clean.classList.add("disable");
    cleanButton.classList.remove("selected");
    laundry.classList.add("disable");
    laundryButton.classList.remove("selected");
    pack.classList.remove("disable");
    packButton.classList.add("selected");
}