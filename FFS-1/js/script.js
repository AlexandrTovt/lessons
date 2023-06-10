'use strict'

document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    let video = document.querySelector('.video__item');

    video.addEventListener('click', function () {
        if(video.classList.contains('ready')) {
            return;
        }
        video.classList.add('ready')
        video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/K2sc_ck5BZU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    });
});

$(document).ready(function() {
    $('.slider__body').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        infinite: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});