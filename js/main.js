// SERVICE SECTION //
document.querySelectorAll('.service__item .switch').forEach(element => {
  element.addEventListener('click', () => {
    element.closest('.service__item').classList.toggle('open');
  })
});

document.querySelectorAll('.service__item .text').forEach(element => {
  const parent = element.closest('.service__item');
  const height = parseInt(window.getComputedStyle(element, null).height);
  parent.style.setProperty('--height', `${height + 121}px`);
})


//STAGES SECTION //
let currentCard = 0;
const stages = document.querySelectorAll('.stage');
const stagesList = document.querySelector('.stages__list')
const stagesBtn = document.querySelector('.stages__buttons');
const btnRight = document.querySelector('.stages .btn-right');
const btnLeft = document.querySelector('.stages .btn-left');
const maxCard = stages.length - 1;

stagesBtn.addEventListener('click', (e) => {
  const stageWidth = parseInt(window.getComputedStyle(stages[0], null).width);
  const stagesGap = parseInt(window.getComputedStyle(stagesList, null).gap);

  switch (e.target) {
    case btnRight:
      currentCard < maxCard ? currentCard++ : currentCard = maxCard;
      break;
    case btnLeft:
      currentCard > 0 ? currentCard-- : currentCard = 0;
      break;
    default:
      return;
  }

  stagesList.style.transform = `translateX(-${(stageWidth + stagesGap) * currentCard}px)`;
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
inputs.forEach ((input, i) => {
  input.addEventListener('input', () => {
    if (formRegExp[i].test(input.value)) input.classList.remove('invalid');
  })
})