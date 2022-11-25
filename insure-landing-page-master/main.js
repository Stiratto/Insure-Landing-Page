const navBar = document.getElementById('navBar')
const navBarUl = document.getElementById('navBarUl')
const body = document.getElementById('body')
const navBarClose = document.getElementById('iconClose')
const introLeft = document.getElementById('introLeft')
const arrow = document.getElementById('arrowUp')
const staticThings = document.getElementById('staticThings')

body.onscroll = function() {myFunction()};

function myFunction() {
    document.getElementById("arrowUp").style.display = 'block'
  }




navBar.addEventListener("click", () => {
    document.getElementById("navBarUl").style.display = 'block'
    document.getElementById('iconClose').style.display = 'block'
    document.getElementById('navBar').style.display = 'none'
    document.getElementById('body').style.overflow = 'hidden'
    document.getElementById('introLeft').style.display = 'none'
    document.getElementById('staticThings').style.display = 'none'
})


navBarClose.addEventListener("click", () => {
    document.getElementById("navBarUl").style.display = 'none'
    document.getElementById('iconClose').style.display = 'none'
    document.getElementById('navBar').style.display = 'block'
    document.getElementById('body').style.overflow = 'visible'
    document.getElementById('staticThings').style.display = 'block'

})

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
    info.style.display = 'block'
  } else {
    mybutton.style.display = "none";
    info.style.display = 'none'
    mybutton.style.animation = 'upDown 3s'
  } 
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




   

