const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let counter = 1;
const size = images[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Giving the carousel a transform style and incrementing the counter by 1 to make the image slide to the left.
next.addEventListener('click', ()=>{
    if(counter >= images.length -1){
        return;
    }
    carousel.style.transition = 'transform .5s ease-in-out';
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Giving the carousel a transform style and decrementing the counter by 1 to make the image slide to the right.
prev.addEventListener('click', ()=>{
    if(counter <= 0){
        return;
    }
    carousel.style.transition = 'transform .5s ease-in-out';
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Stoping the transition for the images that has id : (lastclone and first clone).
carousel.addEventListener('transitionend', () =>{
    if(images[counter].id === 'lastclone'){
        carousel.style.transition = 'none';
        counter = images.length - 2;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    else if (images[counter].id === 'firstclone'){
        carousel.style.transition = 'none';
        counter = images.length - counter;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});