

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

const leftbutton = document.getElementById("slider-left-activate");
const rightbutton = document.getElementById("slider-right-activate");
const sliderImage = document.querySelectorAll(".s1");
let currentIndex = 0;


function showImage(index) {
    sliderImage.forEach((s1,i) => {
        s1.style.display = (i === index)? 'block':'none';
    })
}

leftbutton.addEventListener("click",()=>{
    currentIndex = (currentIndex > 0) ? currentIndex-1 :  sliderImage.length - 1;
    showImage(currentIndex);
});

rightbutton.addEventListener("click",()=>{
    currentIndex = (currentIndex < sliderImage.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
})

showImage(currentIndex);



