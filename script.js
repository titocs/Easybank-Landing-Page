const mobileNav = document.querySelector(".mobile-navigation");
const hamburger = document.querySelector(".hamburger-icon");
const changeIcon = document.querySelector(".hamburger-icon > img");

const mediaQuery = window.matchMedia('(min-width: 992px)');

hamburger.addEventListener("click", function(){
    mobileNav.classList.toggle("displayNone");
    let valueName = changeIcon.getAttribute("src");
    if(valueName === "images/icon-hamburger.svg"){
        changeIcon.setAttribute("src", "images/icon-close.svg");
    }
    else{
        changeIcon.setAttribute("src", "images/icon-hamburger.svg");
    }
})

function myFunction(x){
    if(x.matches){
        mobileNav.classList.add("displayNone");
    }
}
myFunction(mediaQuery);
mediaQuery.addListener(myFunction);