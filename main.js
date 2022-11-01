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

const form = document.querySelector('.decoding__form'),
      formInputs = document.querySelectorAll('.decoding__form > .decoding__form-wrapper > .input'),
      formbtn = document.querySelector('.decoding__submit'),
      formSoe = document.querySelector('.soe'),
      formGemo = document.querySelector('.gemo'),
      formErythro = document.querySelector('.erythro'),
      formMcv = document.querySelector('.mcv'),
      formMch = document.querySelector('.mch'),
      fornMchc = document.querySelector('.mchc'),
      formHct = document.querySelector('.hct'),
      formPlt = document.querySelector('.plt'),
      formCheck = document.querySelector('.check'),
      norm = document.querySelector('.normal'),
      notNormal = document.querySelector('.notNormal'),
      norm1 = document.querySelector('.normal1'),
      notNormal1 = document.querySelector('.notNormal1'),
      norm2 = document.querySelector('.normal2'),
      notNormal2 = document.querySelector('.notNormal2'),
      norm3 = document.querySelector('.normal3'),
      notNormal3 = document.querySelector('.notNormal3'),
      norm4 = document.querySelector('.normal4'),
      notNormal4 = document.querySelector('.notNormal4'),
      norm5 = document.querySelector('.normal5'),
      notNormal5 = document.querySelector('.notNormal5'),
      norm6 = document.querySelector('.normal6'),
      notNormal6 = document.querySelector('.notNormal6'),
      norm7 = document.querySelector('.normal7'),
      notNormal7 = document.querySelector('.notNormal7');

formbtn.addEventListener('click', (e) => {
    e.preventDefault();
    formInputs.forEach(function(input) {
        if (!input.value || input.value == '+' || input.value == '++' || input.value == '-' || input.value == '--' || input.value == ',' || input.value == '.') {
            console.log('no')
        };
    });
    calculate();
});

function calculate () {
    let soe = formSoe,
    gemo = formGemo,
    erythro = formErythro,
    mcv = formMcv,
    mch = formMch,
    mchc = fornMchc,
    hct = formHct,
    plt = formPlt;
    if (soe.value >= 1 & soe.value <= 10) {
        norm.style.display = 'block';
        notNormal.style.display = 'none';
    } else if (soe.value < 1 || soe.value > 10) {
        norm.style.display = 'none';
        notNormal.style.display = 'block';
    } 
    if (gemo.value >= 130 & gemo.value <= 160) {
        norm1.style.display = 'block';
        notNormal1.style.display = 'none';
    } else if (gemo.value < 130 || gemo.value > 160) {
        norm1.style.display = 'none';
        notNormal1.style.display = 'block';
    }
    if (erythro.value >= 4.4 & erythro.value <= 5.0) {
        norm2.style.display = 'block';
        notNormal2.style.display = 'none';
    } else if (erythro.value < 4.4 || erythro.value > 5.0) {
        norm2.style.display = 'none';
        notNormal2.style.display = 'block';
    }
    if (mcv.value >= 80 & mcv.value <= 101) {
        norm3.style.display = 'block';
        notNormal3.style.display = 'none';
    } else if (mcv.value < 80 || mcv.value > 101) {
        norm3.style.display = 'none';
        notNormal3.style.display = 'block';
    }
    if (mch.value >= 27 & mch.value <= 35) {
        norm4.style.display = 'block';
        notNormal4.style.display = 'none';
    } else if (mch.value < 27 || mch.value > 35) {
        norm4.style.display = 'none';
        notNormal4.style.display = 'block';
    }
    if (mchc.value >= 32 & mchc.value <= 37) {
        norm5.style.display = 'block';
        notNormal5.style.display = 'none';
    } else if (mchc.value < 32 || mchc.value > 37){
        norm5.style.display = 'none';
        notNormal5.style.display = 'block';
    }
    if (hct.value >= 37 & hct.value <= 50) {
        norm6.style.display = 'block';
        notNormal6.style.display = 'none';
    } else if (hct.value < 37 || hct.value > 50) {
        norm6.style.display = 'none';
        notNormal6.style.display = 'block';
    }
    if (plt.value >= 150 & plt.value <= 400) {
        norm7.style.display = 'block';
        notNormal7.style.display = 'none';
    } else if (plt.value < 150 || plt.value > 400){
        norm7.style.display = 'none';
        notNormal7.style.display = 'block';
    }
};


