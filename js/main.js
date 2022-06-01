const elSimpleLink = document.querySelector('.js-simple-features__link');
const elsimpleContent = document.querySelector('.js-simple-features-content');
const elSpeedyLink = document.querySelector('.js-speedy-search__link');
const elSpeedyContent = document.querySelector('.js-features-speedy-content');
const elEasyContent = document.querySelector('.js-features-content-easy');
const elEasyLink = document.querySelector('.js-easy-features__link');

elSimpleLink.addEventListener('click', function () {
  elSimpleLink.classList.add('features__link--active');
  elsimpleContent.classList.add('features-content--active');
  elSpeedyLink.classList.remove('features__link--active');
  elSpeedyContent.classList.remove('features-content--active');
  elEasyLink.classList.remove('features__link--active');
  elEasyContent.classList.remove('features-content--active');
});
elSpeedyLink.addEventListener('click', function () {
  elEasyLink.classList.remove('features__link--active');
  elEasyContent.classList.remove('features-content--active');
  elSimpleLink.classList.remove('features__link--active');
  elsimpleContent.classList.remove('features-content--active');
  elSpeedyLink.classList.add('features__link--active');
  elSpeedyContent.classList.add('features-content--active');
});
elEasyLink.addEventListener('click', function () {
  elEasyLink.classList.add('features__link--active');
  elEasyContent.classList.add('features-content--active');
  elSpeedyLink.classList.remove('features__link--active');
  elSpeedyContent.classList.remove('features-content--active');
  elSimpleLink.classList.remove('features__link--active');
  elsimpleContent.classList.remove('features-content--active');
});



const elsFaqButton = document.querySelectorAll('.js-faq-button');
const elsFaqItem = document.querySelectorAll('.faq__item');


// function close(){
//   elsFaqItem.forEach(function(item){
//     item.classList.remove('faq__item--active')
//   })
// }

elsFaqButton.forEach(function (elFaqButton) {
  elFaqButton.addEventListener('click', function () {
    elsFaqItem.forEach(function(item){
      item.classList.remove('faq__item--active')
    })
    elFaqButton.closest('.faq__item').classList.add('faq__item--active');
  });
});
