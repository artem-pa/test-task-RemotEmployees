// SERVICE SECTION //
document.querySelectorAll('.service__item .switch').forEach((element, i) => {
  element.addEventListener('click', () => {
    const text = document.querySelectorAll('.service__item .text')[i];
    const bottom = document.querySelectorAll('.service__row-bottom')[i];
    const height = parseInt(window.getComputedStyle(text, null).height);
    element.closest('.service__item').classList.toggle('open');
    bottom.style.setProperty('--height', `${height}px`);
  })
});


//STAGES SECTION //
let currentCard = 0;
const stages = document.querySelectorAll('.stage');
const stagesList = document.querySelector('.stages__list')
const stagesBtn = document.querySelector('.stages__buttons');
const stageBtnRight = document.querySelector('.stages .btn-right');
const stageBtnLeft = document.querySelector('.stages .btn-left');
const maxCard = stages.length - 1;

stagesBtn.addEventListener('click', (e) => {
  const stageWidth = parseInt(window.getComputedStyle(stages[0], null).width);
  const stagesGap = parseInt(window.getComputedStyle(stagesList, null).gap);

  switch (e.target) {
    case stageBtnRight:
      currentCard < maxCard ? currentCard++ : currentCard = maxCard;
      break;
    case stageBtnLeft:
      currentCard > 0 ? currentCard-- : currentCard = 0;
      break;
    default:
      return;
  }

  stagesList.style.transform = `translateX(-${(stageWidth + stagesGap) * currentCard}px)`;
})


// EXAMPLES SECTION
let examplesStatus = false;
const examples = document.querySelector('.examples__list');
const examplesBtn = document.querySelector('.examples__buttons');
const examplesBtnRight = document.querySelector('.examples .btn-right');
const examplesBtnLeft = document.querySelector('.examples .btn-left');

examplesBtn.addEventListener('click', e => {
  switch (e.target) {
    case examplesBtnRight:
      if (examplesStatus) break;
      examplesStatus = !examplesStatus;
      examples.classList.add('moved')
      break;
    case examplesBtnLeft:
      if (!examplesStatus) break;
      examplesStatus = !examplesStatus;
      examples.classList.remove('moved')
      break;
    default:
      return;
  }
})


// CALLBACK SECTION
const form = document.forms[0];
const inputs = [form[0], form[1], form[2]];
const formBtn = form[3];

const formRegExp = [
  /^[a-zA-ZА-я\є\Є\ї\Ї\і\І\ё\Ё\ \.\-]{3,}$/,
  /^[\w-\ \.\-\@\/]{5,}$/,
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
];

formBtn.addEventListener('click', e => {
  e.preventDefault();
  let isValid = true;
  for (let i = 0; i < 3; i++) {
    if (formRegExp[i].test(inputs[i].value)) continue;
    inputs[i].classList.add('invalid');
    isValid = false;
  }
  if (isValid) console.log('sending data...');
})

let b = 5;
inputs.forEach((input, i) => {
  input.addEventListener('input', () => {
    if (formRegExp[i].test(input.value)) input.classList.remove('invalid');
  })
})


// BURGER
const burger = document.querySelector('.burger');
const navList = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navList.classList.toggle('active');
  document.body.classList.toggle('active');
})


// SCROLL ANIMATION
const scrollEl = document.querySelectorAll('.scroll-js');
scrollEl.forEach(el => el.style.opacity = 0.01);

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  const percentageScroll = 80;

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
  );
};

window.addEventListener('scroll', () => {
  scrollEl.forEach((el) => {
    if (elementInView(el)) {
      el.style.opacity = 1;
    }
  })
})

