let offSet = 0;
const reviewsItems = document.querySelector('.reviews__items');

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

let offSetTwo = 0;
const chooseItems = document.querySelector('.choose__items');

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
    body.classList.toggle('noscroll');
});

popupClose.addEventListener('click', function() {
    popupPage.classList.remove('active-popup');
});