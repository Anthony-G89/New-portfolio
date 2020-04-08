const toggle = $("#toggle");
 const weatherElm = $(".weatherText");
 const codeQuizElm = $(".codeQuizText");
 const localWireElm = $("LocalWireText");
 const goodReadMe = $(".readMeText");

// $("#toggle").on("click",() =>{
//     const element = document.body;
//     element.classList.toggle("dark-mode");
    
// });

$(".weatherText").on("click", () =>{
    window.open("https://github.com/knuckleh3ad89/weather-dashboard");
    
});

$(".codeQuizText").on("click", ()=>{
    window.open("https://github.com/knuckleh3ad89/Code-Quiz");

});

$(".LocalWireText").on("click",()=>{
    window.open("https://github.com/knuckleh3ad89/Project_One");
});

$(".readMeText").on("click", ()=>{
    window.open("https://github.com/knuckleh3ad89/good_readme");
})
