// const getS = (selector, i = 0) => document.querySelectorAll(selector)[i];

document.querySelectorAll('.service__item .switch').forEach(element => {
  element.addEventListener('click', () => {
    element.closest('.service__item').classList.toggle('open');
  })
});