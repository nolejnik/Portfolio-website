const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // button active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length > 0) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            }
            this.className += ' active-btn';
        });
    }
}

pageTransitions();
