const header = document.querySelector('header');
const module = document.querySelectorAll('[class*="slider"]');
const body = document.querySelector('body');
const r = document.querySelector(':root');
const opac1 = document.documentElement.getAttribute('--opac1');
const opac2 = document.documentElement.getAttribute('--opac2');
function fader(entries) {

  entries.forEach(entry => {
    console.log(entry);
    var currentPos = entry.boundingClientRect.y;
    var prevPos;
    var a1 = currentPos;
    var a2 = entry.rootBounds.bottom;
    var b2 = entry.rootBounds.height;
    let fadeOut = () => {
        var x = Math.abs((a1 - a2) / b2);
        var y = 1 - x; 
        document.documentElement.style.setProperty( '--opac1', x );
        r.style.setProperty( '--opac2', `${y}`);
    }
;
    //fade out may not have access to these variables... improper closure
    if (entry.isIntersecting) {
        console.log('workin');
      fadeOut();
      prevPos = currentPos;
    };
  });
};


options = {
    root: body,
    rootMargin: '250px 122px -500px -122px',
    threshold: [.1, .2, .3, .4, .5],
}

let ob = new IntersectionObserver(fader, options);

module.forEach(slider => {
  ob.observe(slider);
});
  
        
        
        
        // SCROLLING + SLIDING + ONPAGE-NAVIGATION + PARALAX + ANIMATION-FRAMES
    // SLIDE IN WELCOME TO RIGHT ONE BY ONE
    // SLIDE UP CONTINUING OF SCREEN 
    // AS LEAVING SLIDE IN MODULE CONTAINER
    // ONCE IN PLACE SCALE
    // WHILE SCALING SLIDE UP CORRESPONDING SLIDER TITLE IN YELLOW - [ PROJECTS - MINI PROJECTS - CASE STUDIES ]

    // ON SCROLL SKEW DIVS TO ROTATE ON Y AXIS TO RESEMBLE WIND CHIMES SHIFTING TO MOVEMENT
    // CREATE GLASS BUTTONS ON EACH SIDE WITH CLEAN ARROWS
    // WHEN CLICKED ARROWS GLOW GLASSY OPAQUE WHITE
    // WHEN CLICKED CLEAR MOUSE EVENTS AND SCROLL DIVS 5 AT A TIME ONCE THE SLIDE ANIMATION STOPS SCROLL BACK TO POSITION
    // IF A DIV IS CLICKED SHIFT IT TO THE CENTER SHIFTING THE ENTIRE LINE
    // THEN SHIFT IT DOWN OUT OF SCREEN VIEW 
    // FIRST CENTER DIV THEN THE REST FOLLOWING LIKE A PLANE FORMATION
    // SCROLL TO THE APROPRIATE PAGE
    // IF SCROLLED TRIGGER PARALAX SCROLLING PATTERN
    // ON SCROLL KEEP ITEMS SEMI OPAQUE BEFORE ENTERING THE CENTER AND SKEW PERSPECTIVE SLIGHTLY BACK
    //
        // WEBPAGE NAVIGATION + APIS + DATABASE-MANAGEMENT + USER PERMISSIONS
    
    

        // FEEDBACK-LOOP + FORMS + ACCESSABILITY + MESSAGE INTERFACE
