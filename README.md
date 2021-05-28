# iopractice
Intersection Observer Practice Module

The purpose of this document is to help me in understanding & mastering the Intersection Observer API, but even more so Vanilla Javascript.

I am unware of any libraries or 3rd party tools that may assist in what I am trying to achieve so I am open to whatever suggestions anyone may have.



//Main Goal
//create 3 div card modules that profesionally display media, references, data, & links.
//Each of the the modules may have different card functionality and animations both on load and while scrolling.
//Allow the modules to function seamlessly without hindering user experience.

//**NOTE**
    //these goals represent the most challenging design aspect of my portfolio
    //I understand that simplicity is best so they will merely act as supporting characters toward the bottom of the webpage to both display other skills that are difficult to express without visual representation
    //they will also be positioned toward the bottom, with the assumption that as users reach the bottom of a footer they generally begin to loose interest, to keep users engaged these animations are designed surprise & guide them into further interaction.

        //Sub Goals


    //Module One - "Projects"
//create a slider gallery that displays 5 div cards at any one time regardless of screen size
//when the slider is 25% in view animate the div cards to translate horizontally from left to right one by one until they occupy their default positions
//after the sliders are in place scale all of the divs simultaneosly:
    //Center Div - 1.6 [posOne] | Surrounding Divs - 1.4 [posTwo] | Outer Divs - 1.2 [posThree]
//as the user scrolls, and the next divs are loaded the slider will always ensure each div is scaled by its respective position.
//if the user scrolls in reverse order, or has reached the end of the nodeList, the slider will continue to scroll by using the next elemnt/previous element to repopulate the viewport
//the slider will also support infinite scrolling functionality that allows for a vast amount of additions/submissions while still maintaining functionality
//each card upon animation will dispaly two buttons in the top right and bottom left corner of the card
//the buttons will be a triangle shape that contain a logo for github with a link to view the code and a link logo to represent a link to the full webpage
//each card features title text only visible when the div is centered if the user hovers or clicks the title, the card translates up and out of view to display a description

    //Module Two - "Contact/Social Links"
//create a slider gallery that populates 1/3 of the viewport by translating in a circular motion
//this slider will resemble a quarter of a wheel or "pie slice" path
//when the module is partially in view the slider will rotate on full clockwise turn then stop at the first 5 cards in the list
//if the user hovers over a card that is centered within the path, another card with a transparent background will translate from left to right displaying an elegant text description of the corresponging card
//each text card features a cta button and a button to exit and return to normal size
//if the user scrolls the text card translates right to left, disapearing before resuming navigation
//if the user clicks a card that is not center the wheel will turn to center that corresponding div then translate the text card 

    //Module Three - "Case Studies"
//create a slider gallery translates left to right
//when the module is in full view and Module Two has completed its animation each of the cards will populate one by one from bottom to top then center to create a visual effect similar to bouncing
//when a user hovers over a card it scales about to take up 25%-30% of the view port size to create a telescope like effect looking inside of the the website link for a brief preview with a scrolling funtionality
//when the user clicks it opens the website
//each preview features a button to exit and return to normal size

    //**ANOTHER NOTE**
        //I HAVE NO IDEA WHAT I'M DOING YET BUT HERE GOES NOTHING

