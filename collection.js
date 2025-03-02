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

     
       document.addEventListener("DOMContentLoaded", function(){
        const checkboxes = document.querySelectorAll('.checking__section input[type="checkbox"]');
        const products = document.querySelectorAll('.product-box'); // We select the all functions in the checkbox and
        //  get the all elements from the product-box using the DOM 

        function filterIteams(){
            let selectedIteams = {    // This one is created for get and show the elements are selected in the checkbox
                occasion:[],
                color:[],
                arrival:[]
            }
        
       

        // The forEach loop is used to iterate and push the all selected
                //  elements inside the selectIteams 
                
        checkboxes.forEach(checkbox =>{
            if(checkbox.checked){
                if(["summer","party","beach"].includes(checkbox.value)) {   
                    selectedIteams.occasion.push(checkbox.value);
                }
                else if(["red","green","blue","gray"].includes(checkbox.value)){
                    selectedIteams.color.push(checkbox.value)
                }
                else if(["new","old"].includes(checkbox.value)){
                    selectedIteams.arrival.push(checkbox.value)
                }
            } 
        });


         // This section is used to check the elements are (checked or unchecked)
         // (selectedIteams.occasion.length=== 0) this line is used to display all elements at unchecked time
         // (selectedIteams.occasion.includes(product.dataset.occasion))  used to display all elements they checked


        products.forEach(product =>{              
            let occasionMatch = selectedIteams.occasion.length=== 0 || selectedIteams.occasion.includes(product.dataset.occasion);
            let colorMatch = selectedIteams.color.length=== 0 || selectedIteams.color.includes(product.dataset.color);
            let arrivalMatch = selectedIteams.arrival.length=== 0 || selectedIteams.arrival.includes(product.dataset.arrival);

            if (occasionMatch && colorMatch && arrivalMatch)
            {
                product.style.display = "block"
            }
            else{
                product.style.display ="none"
            }
        });
    }

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change",filterIteams);
        })

       }) 
       


 
    








































































