import {SmoothScroll} from './smoothScroll.js';

const scrollable = document.querySelector('.scrollable');
let images = [...document.querySelectorAll('img')];

new SmoothScroll(scrollable, images)
