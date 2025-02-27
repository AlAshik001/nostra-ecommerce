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



document.addEventListener("DOMContentLoaded",()=>
    {
        const searchInput = document.querySelector(".product-search input")
        const products = document.querySelectorAll(".product-box")

        searchInput.addEventListener("input",()=>{
            const enterValue = searchInput.value.toUpperCase()
            products.forEach(product => {
                const productName = product.querySelector("h1").textContent.toUpperCase()
                if (productName.includes(enterValue)){
                    product.style.display= "block"
                }
                else{
                    product.style.display="none"
                }
            });

        })
    
        
    })



    document.addEventListener("DOMContentLoaded", ()=>{
    
    })









































































