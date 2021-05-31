const MODULE_ONE_TOTAL_CARD_COUNT = 20;
const MODULE_ONE_CARDS_IN_VIEW = 5;
const MODULE_ONE_BG_COLORS = [
  '#ffbcbc', '#ffd6a7', '#fff5a7', '#b8ffa7', '#a7e8ff', '#daa7ff'
];

let moduleOneSliderVisible = false;
let lastScrollPosition = 0;
let firstVisibleModuleOneCardIndex = 0;

function init() {
  createModuleOneCards();
  seedModuleOne();
  observeModuleOne();
  window.addEventListener('scroll', onScroll);
}

function onScroll(e) {
  if (moduleOneSliderVisible) {
    advanceModuleOne(window.scrollY > lastScrollPosition);
  }
  lastScrollPosition = window.scrollY;
}

function createModuleOneCards() {
  const moduleOneContainer = document.getElementById('module-one');
  const sliderEl = moduleOneContainer.getElementsByClassName('slider')[0];
  for (let i = 0; i < MODULE_ONE_TOTAL_CARD_COUNT; i++) {
    let el = document.createElement('div');
    el.textContent = '' + i;
    el.style.backgroundColor = MODULE_ONE_BG_COLORS[
      i % MODULE_ONE_BG_COLORS.length];
    el.className = 'module-one-card';
    sliderEl.appendChild(el);
  }
  remapModuleOneCardClasses();
}

function seedModuleOne() {
  // const container = document.getElementById('module-one');
  // const sliderEl = container.getElementsByClassName('slider')[0];
  // const storeEl = container.getElementsByClassName('store-future')[0];
  // for (let i = 0; i < MODULE_ONE_CARDS_IN_VIEW; i++) {
    // sliderEl.appendChild(storeEl.firstChild);
  // }
  remapModuleOneCardClasses();
}

function advanceModuleOne(forward) {
  firstVisibleModuleOneCardIndex += forward ? 1 : -1;
  firstVisibleModuleOneCardIndex = Math.max(firstVisibleModuleOneCardIndex, 0);
  firstVisibleModuleOneCardIndex = Math.min(firstVisibleModuleOneCardIndex,
                                            MODULE_ONE_TOTAL_CARD_COUNT);
  remapModuleOneCardClasses();
}

function remapModuleOneCardClasses() {
  let cards = document.getElementById('module-one').getElementsByClassName(
    'module-one-card');
  const sliderEl = document.getElementById('module-one').getElementsByClassName(
    'slider')[0];
  const margin = 10;
  console.log(firstVisibleModuleOneCardIndex);
  cards[firstVisibleModuleOneCardIndex + 0].className = 'module-one-card extreme';
  cards[firstVisibleModuleOneCardIndex + 1].className = 'module-one-card side';
  cards[firstVisibleModuleOneCardIndex + 2].className = 'module-one-card center';
  cards[firstVisibleModuleOneCardIndex + 3].className = 'module-one-card side';
  cards[firstVisibleModuleOneCardIndex + 4].className = 'module-one-card extreme'

  let width = (sliderEl.clientWidth - (MODULE_ONE_CARDS_IN_VIEW + 3) * margin) /
      MODULE_ONE_CARDS_IN_VIEW;
  const startIndex = Math.max(0, firstVisibleModuleOneCardIndex - 1);
  const endIndex = Math.min(MODULE_ONE_TOTAL_CARD_COUNT, startIndex + MODULE_ONE_CARDS_IN_VIEW + 2);

  let x = margin;
  if (startIndex < firstVisibleModuleOneCardIndex) {
    x = -width;
  }

  for (let i = 0; i < MODULE_ONE_TOTAL_CARD_COUNT; i++) {
    cards[i].classList.add('off-screen');
  }

  for (let i = startIndex; i < endIndex; i++) {
    if (i >= firstVisibleModuleOneCardIndex ||
        i <= firstVisibleModuleOneCardIndex + MODULE_ONE_CARDS_IN_VIEW) {
      cards[i].classList.remove('off-screen');
    }
    cards[i].style.left = x + 'px';
    cards[i].style.width = width + 'px';
    x += width + margin;
  }
}

function observeModuleOne() {
  function obFunc(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        moduleOneSliderVisible = true;
      } else {
        moduleOneSliderVisible = false;
      }
    });
  }

  let ob = new IntersectionObserver(obFunc);

  document.querySelectorAll(".slider").forEach((div) => {
    ob.observe(div);
  })
}

// let module = document.querySelector('.projectModule1');
// let divs = document.querySelectorAll('.img');
// let divArray = [...divs];
// let slider = document.querySelector('.slider');
// let div;
