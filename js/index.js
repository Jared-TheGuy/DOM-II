// Your code goes here


let yahoos = document.querySelector('img');


document.addEventListener('keydown', escKey);

function escKey(event) {
    if(event.key === 'Escape') {
        yahoos.classList.add('turnOff');
    }
}

let title = document.querySelector('h2');
title.addEventListener('mouseenter', function() {
    title.classList.add('isPurple');
});
title.addEventListener('mouseleave', function() {
    title.classList.remove('isPurple');
});

let header = document.querySelector('.logo-heading');

document.addEventListener('keydown', function(event) {
    switch(event.code) {
        case "ArrowUp":
            header.classList.add('.isBlue')
            header.classList.remove('.isRed')
            header.classList.remove('.isYellow')
            header.classList.remove('.isGreen')
            console.log(header)
            break;
        case "ArrowDown":
            header.classList.add('.isRed')
            header.classList.remove('.isYellow')
            header.classList.remove('.isGreen')
            header.classList.remove('.isBlue')
            console.log(header)
            break;
        case "ArrowRight":
            header.classList.add('.isYellow')
            header.classList.remove('.isGreen')
            header.classList.remove('.isBlue')
            header.classList.remove('.isRed')
            console.log(header)
            break;
        case "ArrowLeft":
            header.classList.add('.isGreen')
            header.classList.remove('.isBlue')
            header.classList.remove('.isRed')
            header.classList.remove('.isYellow')
            console.log(header)
            break;
    }
});