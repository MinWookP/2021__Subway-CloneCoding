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



for(let i = 0; i < mainMenuList.length;i++){
    mainMenuList[i].addEventListener('mouseover',function(){
        header.style.height = headerHeight + subMenuHeight + 'px'
    })
    mainMenuList[i].addEventListener('mouseout',function(){
        header.style.height = headerHeight + 'px'
    })
}

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


/* TabMenu */
const tabItem = document.querySelectorAll('.tab_item')
const tabInner = document.querySelectorAll('.tab_inner')

tabItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        tabInner.forEach((inner)=> {
            inner.classList.remove('active')
        })

        tabItem.forEach((item)=> {
            item.classList.remove('active')
        })

        tabItem[idx].classList.add('active')
        tabInner[idx].classList.add('active')
    })
})