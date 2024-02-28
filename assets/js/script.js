let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar") ;
let header = document.querySelector(".header-fixed");

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    if(window.scrollY > 150){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}




let countDate = new Date('october 21,2024 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let secound = 1000;
    let minute = secound * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day))/(hour));
    let m = Math.floor((gap % (hour))/(minute));
    let s = Math.floor((gap % (minute))/(secound));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    countDown();
},1000)



 /**
 * Preloader
 */
let preloader = select('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}


function select(selector) {
  return document.querySelector(selector);
}


/**
 * Back to top button
 */
let backtotop = select('.back-to-top');
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active');
    } else {
      backtotop.classList.remove('active');
    }
  };

  window.addEventListener('load', toggleBacktotop);
  document.addEventListener('scroll', toggleBacktotop);
}

// Assuming you have a function named 'select' for element selection
function select(selector) {
  return document.querySelector(selector);
}
