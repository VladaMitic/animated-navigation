const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

//Cotrom animation for navigation items
function navAnimation(dir1, dir2) {
    navItems.forEach((item, index) => {
        item.classList.replace(`slide-${dir1}-${index + 1}`, `slide-${dir2}-${index + 1}`);
    });
}

//Toggle navigation items and burger button 
function toggleNav() {
    //Toggle menu bars open/close
    menuBars.classList.toggle('change');
    //toggle navigation active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        //animate navigation overlay in 
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        //animate in navigation items with delay (css animation)
        navAnimation('out', 'in');
    } else {
        //animate navigation overlay out
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        //animate out navigation items with delay (css animation)
        navAnimation('in', 'out');
    }
}

//Event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(item => {
    item.addEventListener('click', toggleNav);
})