var modalSign = document.getElementById("signUp");
var modalLogin = document.getElementById("logIn");
let body = document.querySelector('body')
let mainBlur = document.querySelector('.main')

var btnSign = document.getElementById("signup");
var btnLogin = document.getElementById("login");

var span = document.getElementsByClassName("close")[0];

btnSign.onclick = function() {
  modalSign.style.display = "block";
  body.classList.add('active-modal');
  mainBlur.classList.add('blur')
}
btnLogin.onclick = function() {
  modalLogin.style.display = "block";
  body.classList.add('active-modal');
  
  mainBlur.classList.add('blur')
}

span.onclick = function() {
  modalSign.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalSign || event.target ==  modalLogin) {
    modalSign.style.display = "none";
    modalLogin.style.display = "none";
    mainBlur.classList.remove('blur')
  body.classList.remove('active-modal')
  }
} 


const swiperMusic = new Swiper('.swiper-music', {
  speed: 400,
  spaceBetween: 100,  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



let menuBtn = document.querySelector('.header__menu');
let menu = document.querySelector('.menu-mobile');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  body.classList.toggle('active-modal');
})

// let musicLink = document.querySelector('#music-link')
// let eventsLink = document.querySelector('#events-link')
// let contactsLink = document.querySelector('#contacts-link')

// let musicBlock = document.querySelector('.music')
// let eventsBlock =  document.querySelector('.events')
// let  contactsBlock = document.querySelector('.contacts')

// musicLink.addEventListener('click', () => {
//   eventsBlock.style.display = 'block'
//   musicLink.style.display = 'none'
//   contactsBlock.style.display = 'none'
// })
// eventsLink.addEventListener('click', () => {
//   eventsBlock.style.display = 'block'
//   musicLink.style.display = 'none'
//   contactsBlock.style.display = 'none'
// })
// contactsLink.addEventListener('click', () => {

// })
function openTab(event, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("header__item");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('active-modal')

  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(name).style.display = "block";
  event.currentTarget.className += " tab-active";
} 


const swiperAdmin = new Swiper('.swiper-admin', {

  navigation: {
    nextEl: '.swiper-admin-button-next',
    prevEl: '.swiper-admin-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    870: {
      slidesPerView: 1,
      enabled: true,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 1,
      enabled: false,
      spaceBetween: 40
    }
  }
});