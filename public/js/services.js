// ---------- Service ---------- //
let clean = document.getElementById("cleanInfo");
let laundry = document.getElementById("laundryInfo");
let pack = document.getElementById("packageInfo");

let cleanButton = document.getElementById("cleanButton");
let laundryButton = document.getElementById("laundryButton");
let packButton = document.getElementById("packageButton");

// เปิดแท็บ Cleaning ในหน้า Services
function cleanOpen() {
  clean.classList.remove("disable");
  cleanButton.classList.add("selected");
  laundry.classList.add("disable");
  laundryButton.classList.remove("selected");
  pack.classList.add("disable");
  packButton.classList.remove("selected");
}

// เปิดแท็บ Laundry ในหน้า Services
function laundryOpen() {
  clean.classList.add("disable");
  cleanButton.classList.remove("selected");
  laundry.classList.remove("disable");
  laundryButton.classList.add("selected");
  pack.classList.add("disable");
  packButton.classList.remove("selected");
}

// เปิดแท็บ Combo ในหน้า Services
function packOpen() {
  clean.classList.add("disable");
  cleanButton.classList.remove("selected");
  laundry.classList.add("disable");
  laundryButton.classList.remove("selected");
  pack.classList.remove("disable");
  packButton.classList.add("selected");
}