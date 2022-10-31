let offSet = 0;
const reviewsItems = document.querySelector('.reviews__items');

const mediaQuery3 = window.matchMedia('(min-width: 566px)')
if (mediaQuery3.matches) {
    document.querySelector('.reviews__control-next').addEventListener('click', function() {
        offSet += 550;
        offSet > 2750 ? offSet = 0 : undefined;
        reviewsItems.style.left = -offSet + 'px';
    });
    document.querySelector('.reviews__control-prev').addEventListener('click', function() {
        offSet -= 550;
        offSet < 0 ? offSet = 2750 : undefined;
        reviewsItems.style.left = -offSet + 'px';
    });
};

let offSetMini = 0;
const reviewsItemsMini = document.querySelector('.reviews__items');

const mediaQuery4= window.matchMedia('(max-width: 565px)')
if (mediaQuery4.matches) {
    document.querySelector('.reviews__control-next').addEventListener('click', function() {
        offSetMini += 295;
        offSetMini > 1475 ? offSetMini = 0 : undefined;
        reviewsItemsMini.style.left = -offSetMini + 'px';
    });
    document.querySelector('.reviews__control-prev').addEventListener('click', function() {
        offSetMini -= 295;
        offSetMini < 0 ? offSetMini = 1475 : undefined;
        reviewsItemsMini.style.left = -offSetMini + 'px';
    });
};

let offSetTwo = 0;
const chooseItems = document.querySelector('.choose__items');

const mediaQuery = window.matchMedia('(min-width: 446px)')
if (mediaQuery.matches) {
    document.querySelector('.choose__control-next').addEventListener('click', function() {
        offSetTwo += 400;
        offSetTwo > 2400 ? offSetTwo = 0 : undefined;
        chooseItems.style.left = -offSetTwo + 'px';
    });
    document.querySelector('.choose__control-prev').addEventListener('click', function() {
        offSetTwo -= 400;
        offSetTwo < 0 ? offSetTwo = 2400 : undefined;
        chooseItems.style.left = -offSetTwo + 'px';
    });
};

let offSetTwoMini = 0;
const chooseItemsMini = document.querySelector('.choose__items');

const mediaQuery2 = window.matchMedia('(max-width: 445px)')
if (mediaQuery2.matches) {
    document.querySelector('.choose__control-next').addEventListener('click', function() {
        offSetTwoMini += 275;
        offSetTwoMini > 1650 ? offSetTwoMini = 0 : undefined;
        chooseItemsMini.style.left = -offSetTwoMini + 'px';
    });
     document.querySelector('.choose__control-prev').addEventListener('click', function() {
        offSetTwoMini -= 275;
        offSetTwoMini < 0 ? offSetTwoMini = 1650 : undefined;
        chooseItemsMini.style.left = -offSetTwoMini + 'px';
    });
};

const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const body = document.body;

burger.addEventListener('click', function brg(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle('noscroll');
    insideMenu();
});

const menu = document.querySelector('#menu').cloneNode(1);

function insideMenu() {
    popup.appendChild(menu);
};

const popupOpen = document.getElementById('openPopup');
const popupClose = document.getElementById('closePopup');
const popupPage = document.getElementById('mainPopup');

popupOpen.addEventListener('click', function(e) {
    e.preventDefault();
    popupPage.classList.add('active-popup');
});

popupClose.addEventListener('click', function() {
    popupPage.classList.remove('active-popup');
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

