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