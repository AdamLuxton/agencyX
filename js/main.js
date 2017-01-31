(function(){
//"use strict"

//variables
var logoSVG,
    clicked = false,
    navLinks = document.querySelectorAll("nav ul li a"),
    linkContainer = document.querySelector("nav ul"),
    body = document.querySelector("body"),
    title = document.querySelector("#title"),
    pageTitle = document.querySelector("title"),
    homeText = document.querySelector("#homeTextBottom"),
    sideText = document.querySelector("#sideText"),
    on = false,
    dynamicContent = {
  		home: {
        title: "Ollie's Outback Surf Shack",
        bgImg: "home_background.jpg",
        text: ""
  		},

  		about : {
        title: "About Us",
        bgImg: "about_background.jpg",
        text: "Just a couple of Fair Dinkum dudes riding the waves! We love a good Grommet and teach daily lessons to those willing to listen.<br><br> When you leave we want you to ring your pals and tell em’ Ollie’s Outback Surf Shack is Ripper!"
      },

  		team : {
        title: "The Team",
        bgImg: "team_background.jpg",
        text: "Arvo! She’ll be right, grab a slab and tour down to Bondi Beach for some afternoon Barbie and high tide!<br><br> We’re a two man oporation located right on the beach."
  		}
	   };

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

function changeLogo(){
  //console.log("running");
  if (on===false){
      document.querySelector("#logoIcon").classList.add("corner");
      on = true;
  }
  else{
      document.querySelector("#logoIcon").classList.remove("corner");
      on = false;
  }
}

function cycleContent(e){
  e.preventDefault();
  hamburgerClick();
  var page = e.currentTarget.id;
  e.currentTarget.classList.add("current");
  [].forEach.call(navLinks, function(link){
    if (link.id!=page){
      link.classList.remove("current");
    }
  });
  //console.log(page);
  changeTo(page);
}

function changeTo(page){
  if (page==="home") {
    on=true;
    TweenMax.to(homeText, 0.5, {opacity:1, ease:Power1.easeOut});
    changeLogo();
  }
  else if (page==="about"){
    on=false;
    TweenMax.to(homeText, 0.5, {opacity:0, ease:Power1.easeOut});
    changeLogo();
  }
  else{
    on=false;
    TweenMax.to(homeText, 0.5, {opacity:0, ease:Power1.easeOut});
    changeLogo();
  }
  title.innerHTML = dynamicContent[page].title;
  sideText.innerHTML = dynamicContent[page].text;
  TweenMax.from(sideText, 1, {opacity:0, ease:Power1.easeOut});
  body.style.backgroundImage = "url(images/"+dynamicContent[page].bgImg+")";
  pageTitle.innerHTML = dynamicContent[page].title;
}

//listeners
document.querySelector("#logoIcon").addEventListener('load', loadSVG, false);
//document.querySelector("#changeLogo").addEventListener('click', changeLogo, false);
[].forEach.call(navLinks, function(link){
  link.addEventListener('click', cycleContent, false);
});
})();
