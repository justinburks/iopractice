const MODULE_ONE_TOTAL_CARD_COUNT = 10;
const MODULE_ONE_BG_COLORS = [
  '#ffbcbc', '#ffd6a7', '#fff5a7', '#b8ffa7', '#a7e8ff', '#daa7ff'
];

function createModuleOneCards() {
  const moduleOneContainer = document.getElementById('module-one');
  const storeEl = moduleOneContainer.getElementsByClassName('store')[0];
  for (let i = 0; i < MODULE_ONE_TOTAL_CARD_COUNT; i++) {
    let el = document.createElement('div');
    el.style.backgroundColor = MODULE_ONE_BG_COLORS[
      i % MODULE_ONE_BG_COLORS.length];
    el.className = 'module-one-card';
    storeEl.appendChild(el);
  }
}


let module = document.querySelector('.projectModule1');
let divs = document.querySelectorAll('.img');
let divArray = [...divs];
let slider = document.querySelector('.slider');
let div;

let options = {
    root: module,
    rootMargin: '0px 25% 0px 25%',
    threshold: [1],
}

function obFunc(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target);
        }
    })


}

let ob = new IntersectionObserver(obFunc, options);

divArray.forEach((div) => {
    ob.observe(div);
})
