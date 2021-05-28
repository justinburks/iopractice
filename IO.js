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
