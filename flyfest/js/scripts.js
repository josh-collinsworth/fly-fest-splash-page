//Get everything that should fade in
const sections = document.querySelectorAll('section:not(#welcome):not(.section-break) *');

//Get all the nav menu items, the hamburger menu, and the actual (hidden) menu checkbox
const menuItems = document.querySelectorAll('#slideout-menu ul li');
const hamby = document.querySelector('#hamburger-container label');
const menuCheckBox = document.querySelector('#hamburger-container input[type=checkbox]');


//Throttle scroll events
function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

//Add scroll event listeners to everything that should fade in
sections.forEach(section => {
    section.offsetTop >= window.innerHeight ? section.classList.add('disappear') : null;
    window.addEventListener('scroll', throttle(callBack, 50));
});

//The function that actually runs(and is throttled) on scroll
function callBack() {
    sections.forEach(section => {
        if (window.scrollY >= (section.offsetTop - (window.innerHeight / 1.2)) || window.scrollY >= (document.body.clientHeight - window.innerHeight)) {
            section.classList.remove('disappear');
            section.tagName == 'IMG' ? section.classList.add('bounce-in') : null;
            section.tagName == 'HR' ? section.classList.add('stretch-in') : null;
            window.removeEventListener('scroll', throttle, false);
        }
    });
}


//Prep the below fanciness by adding classes to menu items
menuItems.forEach(item => { item.classList.add('slid-out') });


//Hamburger menu slidein fanciness
hamby.addEventListener('click', function(){
    let duration = 50;
    let timer = duration;
    menuItems.forEach(item => {
        setTimeout(()=>{
            if(!item.classList.contains('sliding-in')){  
                item.classList.add('sliding-in');
            } else {
                item.classList.remove('sliding-in');
            }
        }, timer);
        timer += duration;
    });
})