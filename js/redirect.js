let div = document.querySelectorAll(".home-prod-divs")
console.log(div)

div.forEach(element => {
   element.addEventListener("click", e=>{
    window.location = element.id+".html"
   }) 
});