'use strict';

var sliderContent = document.querySelector('#slider-content');
var haircuts = document.querySelector('#haircuts');
var shaving = document.querySelector('#shaving');
var additional = document.querySelector('#additional');
var sliderContentHaircuts = document.querySelector('#slider-content__haircuts');
var sliderContentShaving = document.querySelector('#slider-content__shaving');
var sliderContentAdditional = document.querySelector('#slider-content__additioanl');

function slideLeft(e) {
    if (shaving.classList.contains('slider-tabs__tab--active')) {
        shaving.classList.remove('slider-tabs__tab--active');
    } else {
        additional.classList.remove('slider-tabs__tab--active');
    }
	this.classList.add('slider-tabs__tab--active');
	sliderContent.style.transform = "translateX(0%)";
}

function slideCenter(e) {
    if (haircuts.classList.contains('slider-tabs__tab--active')) {
        haircuts.classList.remove('slider-tabs__tab--active');
    } else {
        additional.classList.remove('slider-tabs__tab--active');
    }
	this.classList.add('slider-tabs__tab--active');
	sliderContent.style.transform = "translateX(calc(100% / 3 * (-1)))";
}

function slideRight(e) {
    if (haircuts.classList.contains('slider-tabs__tab--active')) {
        haircuts.classList.remove('slider-tabs__tab--active');
    } else {
        shaving.classList.remove('slider-tabs__tab--active');
    }
	this.classList.add('slider-tabs__tab--active');
	sliderContent.style.transform = "translateX(calc(100% / 3 *(-2)))";
}

haircuts.addEventListener('click', slideLeft);
shaving.addEventListener('click', slideCenter)
additional.addEventListener('click', slideRight);