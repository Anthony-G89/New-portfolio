const toggle = $("#toggle");
 const weatherElm = $(".weatherText");
 const codeQuizElm = $(".codeQuizText");
 const localWireElm = $("LocalWireText");
 const goodReadMe = $(".readMeText");

// $("#toggle").on("click",() =>{
//     const element = document.body;
//     element.classList.toggle("dark-mode");
    
// });

$("#weatherDashboard").on("click", () =>{
    window.open("https://github.com/knuckleh3ad89/weather-dashboard");
    
});

$("#codeQuiz").on("click", ()=>{
    window.open("https://github.com/knuckleh3ad89/Code-Quiz");

});

$("#LocalWire").on("click",()=>{
    window.open("https://github.com/knuckleh3ad89/Project_One");
});

$("#readMe").on("click", ()=>{
    window.open("https://github.com/knuckleh3ad89/good_readme");
})
