 const header = document.querySelector('.header')
 window.addEventListener('scroll', fixNav)

function fixNav(){
     if(window.scrollY > header.offsetHeight + 100){
         header.classList.add('active')
     }
     else{
         header.classList.remove('active')
    }
 }

// window.onscroll = function() {myFunction()};

// let header = document.getElementById("header");
// let sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky")
//   } else {
//     header.classList.remove("sticky");
//   }
// }