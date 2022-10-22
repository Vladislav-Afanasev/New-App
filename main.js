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
    offSet += 400;
    offSet > 2800 ? offSetTwo = 0 : undefined;
    chooseItems.style.left = -offSetTwo + 'px';
});
document.querySelector('.choose__control-prev').addEventListener('click', function() {
    offSetTwo -= 550;
    offSetTwo < 0 ? offSetTwo = 2800 : undefined;
    chooseItems.style.left = -offSetTwo + 'px';
});