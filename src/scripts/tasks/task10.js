'use strict';
// import Siema here as per requirements
import Siema from 'siema';

function onInitCallback() {
    console.log('Siema initialised bro :)');
}

function onChangeCallback() {
    console.log(`The index of current slide is: ${this.currentSlide}`);
}


let initSiema = () => {
    const mySiema = new Siema({
        selector: '.siema',
        duration: 500,
        loop: true,
        startIndex: 0,
        draggable: true,
        onInit: onInitCallback,
        onChange: onChangeCallback,
    });

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.addEventListener('click', () => mySiema.prev());
    next.addEventListener('click', () => mySiema.next());
};

// if on the task1 page
if (document.getElementsByClassName('siema')[0] != null) {
    initSiema();
}


