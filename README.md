# etch-a-sketch

> [!NOTE]
> After returning to The Odin Project after a longer break, there may have been some changes in the assignments of the project. Please note that this repository shows my original solution without incorporating these changes.

## Assignment ([The Odin Project Challenge Nr.4](https://www.theodinproject.com/lessons/foundations-etch-a-sketch))
1. [x] Follow the instructions atop Odin’s Google Homepage project to setup a git repository for this project.
1. [x] Create a webpage with a 16x16 grid of square divs
    1. Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!
    1. Best to put your grid squares inside another “container” div (that one can go directly in your html)
    1. There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them:
        1. float/clear
        1. inline-block
        1. flexbox
        1. CSS Grid
    1. Be careful with borders and margins, they can adjust the size of the squares!
        1. “OMG, Why isn’t my grid being created???”
        1. Did you link your CSS stylesheet?
        1. Open your browser’s developer tools
        1. Check if there are any errors in the JavaScript console
        1. Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
        1. Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
1. [x] Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    1. Hint: “hovering” is what happens when your mouse enters a div and ends when your mouse leaves it.. you can set up event listeners for either of those events as a starting point.
    1. There are multiple ways to change the color of the divs, including:
        1. adding a new class to the div
        1. changing the div’s background color using JavaScript.
1. [x] Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, resulting in possible delays, freezing, or crashing that we want to prevent.
    1. Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    1. Also check out prompts
    1. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used
1. [x] (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
1. [x] Push your project to GitHub!