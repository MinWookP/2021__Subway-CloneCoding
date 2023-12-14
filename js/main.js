/*DropDown Menu*/
const header = document.querySelector('nav');
const mainMenuList = document.querySelectorAll('.mainmenu > li');
const subMenu = document.querySelectorAll('.submenu');
const headerHeight = header.offsetHeight;
let subMenuHeight = 0;

for(let i = 0; i < subMenu.length; i++){
    if(subMenu[i].offsetHeight > subMenuHeight){
        subMenuHeight = subMenu[i].offsetHeight;
    }
}

console.log(subMenu)
console.log(subMenuHeight)


for(let i = 0; i < mainMenuList.length;i++){
    mainMenuList[i].addEventListener('mouseover',function(){
        header.style.height = headerHeight + subMenuHeight + 'px'
    })
    mainMenuList[i].addEventListener('mouseout',function(){
        header.style.height = headerHeight + 'px'
    })
}


/*Main Banner*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



/*Menu Slide */
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*Sponer slide*/ 
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView:1,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


/* Login Modal */
const modal = document.getElementById('modal');
const btnModal = document.getElementById('btn-login');

btnModal.addEventListener('click',function(e){
    modal.style.display = "flex"
})
modal.addEventListener('click',function(e){
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")){
        modal.style.display = "none"
    }
})

window.addEventListener('keyup',function(e){
    if(modal.style.display === "flex" && e.key === "Escape"){
        modal.style.display = "none"
    }
})