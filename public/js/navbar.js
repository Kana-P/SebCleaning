// Hamburger
let sidebar = document.getElementById("side");
let ham = document.getElementById("ham");
let signIn = document.getElementById("signInNav");

function HamOpen() {
  const hamburger = document.querySelector("#ham");
  if (hamburger.classList.contains("stage0")) {
    sidebar.style.right = "0px";
    ham.classList.add("stage1");
    ham.classList.remove("stage0");
    ham.classList.add("fa-times");
    ham.classList.remove("fa-bars");
    ham.classList.remove("d-lg-none");
    signIn.classList.add("hide");
  } else if (hamburger.classList.contains("stage1")) {
    sidebar.style.right = "-302px";
    ham.classList.add("stage0");
    ham.classList.remove("stage1");
    ham.classList.add("fa-bars");
    ham.classList.remove("fa-times");
    ham.classList.add("d-lg-none");
    signIn.classList.remove("hide");
  }
}
