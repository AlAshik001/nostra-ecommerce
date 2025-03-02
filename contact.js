var offbar = document.querySelector(".off-bar");
var closebar = document.querySelector(".closebar");

closebar.addEventListener("click",()=>{
    offbar.style.display = "none";
})

var sidenav = document.getElementById("sidenav")
var menubar = document.getElementById("menubar")
var sideclose = document.querySelector(".sideclose")


menubar.addEventListener("click",()=>{
    sidenav.style.left=0;
})

sideclose.addEventListener("click",()=>{
    sidenav.style.left= "-50%";
})