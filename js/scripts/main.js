
// SLIDER
var slideThumbail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlideProgress: true,

    breakpoints: {
        320:{
            direction: 'horizontal'
        },
        777:{
            direction: 'vertical',
        }
    }
 });


const progressSlide = document.querySelector('.js-progress')

var slideHero = new Swiper(".slide-principal", {
   effect: 'fade',
   thumbs: {
       swiper: slideThumbail,
   }, 
   autoplay: {
       delay: 5000,
       disableOnInteraction: false // não interferir no autoPlay
   },
   on: {
        init: function(){
            progressSlide.classList.remove('animate')
            progressSlide.classList.remove('active')
            progressSlide.classList.add('animate')
            progressSlide.classList.add('active')
        },
        slideChangeTransitionStart: function(){
            progressSlide.classList.remove('animate')
            progressSlide.classList.remove('active')
            progressSlide.classList.add('active')
        },
        slideChangeTransitionEnd: function(){
            progressSlide.classList.add('animate')
        }
   }
});


// SESSÃO GAMES, MUDANÇA DE CATEGORIA 

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');


allFilters.forEach((fillter, index) => {
    fillter.addEventListener('click', (event) => {
       event.preventDefault()

        allFilters.forEach(item => {
            item.classList.remove('active');
        })

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        })

        tabPane[index].classList.add('active');
        fillter.classList.add('active')
    })
})


// MODAL, ABRIR E FECHAR

const btnOpenModal = document.querySelector('.js-open-modal')
const btnCloseModal = document.querySelector('.js-close')


btnOpenModal.addEventListener('click', (event) =>{
    event.preventDefault();
    let tagHtml = document.documentElement // ADICIONAR CLASSE AO HTML
    tagHtml.classList.add('show-modal');

})


btnCloseModal.addEventListener('click', () =>{
    let tagHtml = document.documentElement // ADICIONAR CLASSE AO HTML
    tagHtml.classList.remove('show-modal');
})



// MENU DROPDOWN

const btnMenu = document.querySelectorAll('.js-btn-menu')
const menuSite = document.querySelectorAll('.js-menu')

btnMenu.forEach((btn, index) =>{
    btn.addEventListener('click', (event) =>{
        event.preventDefault();
        
        menuSite.forEach(itemMenu =>{
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => {  // ao sair do menu, remove a classe active
                itemMenu.classList.remove('active')

                
                btnMenu.forEach(itemBtn =>{
                    itemBtn.classList.remove('active') // REMOVE A CLASSE ACTIVE, QUANDO SAI
                })
            })
        })

        btnMenu.forEach(itemBtn =>{
            itemBtn.classList.remove('active')
        })

        btn.classList.add('active');
        menuSite[index].classList.add('active');
    })
})


// menu mobile

const btnMenuMobile = document.getElementById('js-btn-menu-mobile')
const overlayMenu = document.querySelector('.js-overlay')

function openMenuMobile(){
    document.documentElement.classList.toggle('menu-opened')
}




overlayMenu.addEventListener('click', openMenuMobile);
btnMenuMobile.addEventListener('click', openMenuMobile);


// MODAL MOBILE

const btnOpenModalMobile = document.getElementById('open-modal-mobile')
const btnCloseModalMobile = document.querySelector('.modal-mobile-close')



btnOpenModalMobile.addEventListener('click', (event) =>{
    event.preventDefault();
    let tagHtml = document.documentElement // ADICIONAR CLASSE AO HTML
    tagHtml.classList.add('show-modal-mobile');

})


btnCloseModal.addEventListener('click', () =>{
    let tagHtml = document.documentElement // ADICIONAR CLASSE AO HTML
    tagHtml.classList.remove('show-modal-mobile');
})

