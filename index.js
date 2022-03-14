const iconMenu= document.querySelector('#icon-menu'),
    menu= document.querySelector('.header-top__menu')

    iconMenu.addEventListener('click', (e)=>{
        menu.classList.toggle('active')
    })