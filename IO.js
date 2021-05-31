const MODULE_ONE_TOTAL_CARD_COUNT = 20;
const MODULE_ONE_CARDS_IN_VIEW = 5;
const MODULE_ONE_BG_COLORS = [
  '#ffbcbc', '#ffd6a7', '#fff5a7', '#b8ffa7', '#a7e8ff', '#daa7ff'
];

let moduleOneSliderVisible = false;
let lastScrollPosition = 0;

function init() {
  createModuleOneCards();
  seedModuleOne();
  observeModuleOne();
  window.addEventListener('scroll', onScroll);
}

function onScroll(e) {
  console.log(e);
  if (moduleOneSliderVisible) {
    advanceModuleOne(window.scrollY > lastScrollPosition);
  }
  lastScrollPosition = window.scrollY;
}

function createModuleOneCards() {
  const moduleOneContainer = document.getElementById('module-one');
  const storeEl = moduleOneContainer.getElementsByClassName('store-future')[0];
  for (let i = 0; i < MODULE_ONE_TOTAL_CARD_COUNT; i++) {
    let el = document.createElement('div');
    el.style.backgroundColor = MODULE_ONE_BG_COLORS[
      i % MODULE_ONE_BG_COLORS.length];
    el.className = 'module-one-card';
    storeEl.appendChild(el);
  }
}

function seedModuleOne() {
  const container = document.getElementById('module-one');
  const sliderEl = container.getElementsByClassName('slider')[0];
  const storeEl = container.getElementsByClassName('store-future')[0];
  for (let i = 0; i < MODULE_ONE_CARDS_IN_VIEW; i++) {
    sliderEl.appendChild(storeEl.firstChild);
  }
  remapModuleOneCardClasses();
}

function advanceModuleOne(forward) {
  const container = document.getElementById('module-one');
  const storeFutureEl = container.getElementsByClassName('store-future')[0];
  const storePastEl = container.getElementsByClassName('store-past')[0];
  const sliderEl = container.getElementsByClassName('slider')[0];
  if (forward) {
    if (storeFutureEl.children.length == 0) {
      console.log('Last card');
      return;
    }
    storePastEl.appendChild(sliderEl.firstChild);
    sliderEl.appendChild(storeFutureEl.firstChild);
  } else {
    if (storePastEl.children.length == 0) {
      console.log('First card');
      return;
    }
    sliderEl.insertBefore(storePastEl.lastChild, sliderEl.firstChild);
    storeFutureEl.insertBefore(sliderEl.lastChild, storeFutureEl.firstChild);
  }
  remapModuleOneCardClasses();
}

function remapModuleOneCardClasses() {
  let cards = document.getElementById('module-one').getElementsByClassName(
    'module-one-card');
  cards[0].className = 'module-one-card extreme';
  cards[1].className = 'module-one-card side';
  cards[Math.floor(MODULE_ONE_CARDS_IN_VIEW / 2)].className = 'module-one-card center';
  cards[MODULE_ONE_CARDS_IN_VIEW - 2].className = 'module-one-card side';
  cards[MODULE_ONE_CARDS_IN_VIEW - 1].className = 'module-one-card extreme'
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
