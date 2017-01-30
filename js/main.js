(function(){
//"use strict"

//variables
var logoSVG;
var clicked = false;
var navLinks = document.querySelectorAll("nav ul li");
var linkContainer = document.querySelector("nav ul");

//functions
function loadSVG(e){
  logoSVG = this.contentDocument;
  animateLogo();
  resetHamburger();
}

function animateLogo(){
  TweenMax.from(logoSVG.querySelector("#pinkCircle"),1,{scale:0, transformOrigin:"center", ease:Elastic.easeOut});
  TweenMax.from(logoSVG.querySelector("#innerCircle"),1,{scale:0, transformOrigin:"center", ease:Elastic.easeOut, delay: 0.25});
  TweenMax.from(logoSVG.querySelector("#Ollies"),1,{scale:0, transformOrigin:"center", ease:Elastic.easeOut, delay: 1});
  TweenMax.from(logoSVG.querySelector("#Outback"),1,{scale:0, transformOrigin:"center", ease:Elastic.easeOut, delay: 1.3});
  TweenMax.from(logoSVG.querySelector("#Surf"),1,{scale:0, transformOrigin:"center", ease:Elastic.easeOut, delay: 1.6});
  TweenMax.from(logoSVG.querySelector("#Shack"),1,{scale:0, transformOrigin:"center", ease:Elastic.easeOut, delay: 1.9});
  TweenMax.from(logoSVG.querySelector("#board"),1,{scale:0, transformOrigin:"center", ease:Elastic.easeOut, delay: 1.6});
}

function resetHamburger(){
  document.querySelector('#hamburgerIcon').addEventListener('click', hamburgerClick, false);
}

function hamburgerClick(){
  document.querySelector('#hamburgerIcon').removeEventListener('click', hamburgerClick, false);
  if (clicked === false){
    //console.log("running");
    TweenMax.to(document.querySelector("#line1"), 0.5, {attr:{x1:716.3, y1:283.7, x2:283.7, y2: 716.3}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line2"), 0.5, {attr:{x1:525, y1:500.1, x2:525, y2: 500.1}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line3"), 0.5, {attr:{x1:716.3, y1:716.4, x2:283.7, y2:283.8}, ease:Power1.easeOut});
    TweenMax.to(linkContainer, 0.5,{scaleX:1, transformOrigin:"left center", ease:Power1.easeOut});
    [].forEach.call(navLinks, function(link){
      TweenMax.to(link, 0.5, {opacity:1, ease:Power1.easeOut, delay:0.5});
    });
    clicked = true;
    resetHamburger();
  }
  else{
    TweenMax.to(document.querySelector("#line1"), 0.5, {attr:{x1:805.9, y1:186.6, x2:194.1, y2: 186.6}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line2"), 0.5, {attr:{x1:805.9, y1:500.1, x2:194.1, y2: 500.1}, ease:Power1.easeOut});
    TweenMax.to(document.querySelector("#line3"), 0.5, {attr:{x1:805.9, y1:813.6, x2:194.1, y2:813.6}, ease:Power1.easeOut});
    [].forEach.call(navLinks, function(link){
      TweenMax.to(link, 0.5, {opacity:0, ease:Power1.easeOut});
    });
    TweenMax.to(linkContainer, 0.5,{scaleX:0, transformOrigin:"left center", ease:Power1.easeOut, delay: 0.5});
    resetHamburger();

    clicked = false;
  }

}

//listeners
document.querySelector("#logoIcon").addEventListener('load', loadSVG, false);

})();
