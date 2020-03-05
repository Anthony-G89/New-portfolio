const toggle = $("#toggle");
 const weatherElm = document.querySelector(".weatherText");

$("#toggle").on("click",() =>{
    const element = document.body;
    element.classList.toggle("dark-mode");
    
});

$(".weatherText").on("click", () =>{
    window.open("https://knuckleh3ad89.github.io/weather-dashboard/");
    
})