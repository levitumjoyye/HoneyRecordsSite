document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('#nav');
    const navBtn = document.querySelector('#nav-btn');
    const navBtnImg = document.querySelector('#nav-btn-img');

    navBtn.onclick = () => {
        window.scrollTo(0, 0);
        nav.classList.toggle('nav-open');
        if (nav.classList.contains('nav-open')) {
            navBtnImg.src = "./images/icons8-close.svg";
        } else {
            navBtnImg.src = "./images/nav_icon.svg";
        }
    };
});


const nav = document.querySelector('#nav');
const aboutUsLine = document.querySelector('#menu a');

aboutUsLine.onclick = () => {
    nav.classList.remove('nav-open');
};


const modalCall = $("[data-modal]");

modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function () {
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
        });
    }, 200);
});

const modalClose = $("[data-close]");

modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function () {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 200);
});

$(".modal").on("click", function (event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function () {
        $this.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 200);
});

$(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
});


//плавная прокрутка
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function(){
    $("#contacts").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});




/* Slider: https://kenwheeler.github.io/slick/ =====================*/

const modalSlider = $('[data-slider="modals"]');

modalSlider.modals({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
});

$(".modalsPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.works').find('[data-slider="modals"]');

    currentSlider.slick("modalsPrev");
});

$(".modalsNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.works').find('[data-slider="modals"]');

    currentSlider.slick("modalsNext");
});


