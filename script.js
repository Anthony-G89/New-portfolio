const toggle = $("#toggle");
 const weatherElm = $(".weatherText");
 const codeQuizElm = $(".codeQuizText");
 const localWireElm = $("LocalWireText");

// $("#toggle").on("click",() =>{
//     const element = document.body;
//     element.classList.toggle("dark-mode");
    
// });

$(".weatherText").on("click", () =>{
    window.open("https://knuckleh3ad89.github.io/weather-dashboard/");
    
});

$(".codeQuizText").on("click", ()=>{
    window.open("https://knuckleh3ad89.github.io/Code-Quiz/");

});

$(".LocalWireText").on("click",()=>{
    window.open("https://knuckleh3ad89.github.io/Project_One/");
})
