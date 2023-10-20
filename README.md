# etch-a-sketch
This project is a browser based sketch-pad/etch-a-sketch. This project was created to continue practicing JS (mainly the DOM).

The grid creation nested loops work by creating the required rows and then populating them with the required cells to achieve an X by X grid layout. The rows and cells are flex children and are set to flex-grow: 1 to grow at an equal rate inside their parent container. A height of 100% was initally used on both rows and cells when testing to help visualize what changes are happening but I realised this property wasn't needed I take care of the sizing via flex-grow.

Some problems I encountered on the journey to arriving at this solution:

- Initially the cells were sized by using the grid container's width and height by using a divider to get the cell's width and height. E.g. an 800x800 container with a desired 5x5 grid would make each cell's dimensions 160x160. (800/5 = 160)

- One problem I found was that the cells would overflow the container due to 'box-sizing: border-box' reducing the overall size of the container from the 1px border on each side, effectively making the container 798x798. Some solutions to this problem are to subtract 2px from the grid container dimensions when the cell dimensions are being calculated, adding 2px to the size of the grid container when it is made to account for the border, make the 'box-sizing: content box' on only the container, taking the border off entirely or adding an 'outline: 1px solid black' so the size of the container isnt changed. All of these solutions seemed inefficient or unwanted and after searching the TOP discord I arrived at the idea of handing all of the sizing with flexbox instead.

The shader feature was tricky to implement, I started with the opacity property but found that was removing/changing the color of cell borders. I then tried with setting each cells color to white(rgb(255,255,255)) and subtracting 25 through each pass of a cell, E.g. 255-230-205-180 etc to create the effect of incrementing a greyscale, this worked fine but I opted to use data-* attributes on the div elements themselves. While I am happy with my solution I think it could have been done better.

Overall I was happy with how I planned out my implementations on paper and via codepen snippets before starting which allowed me to break down each feature and test it properly before trying to build anything.

===Improvements could be made in the following areas:===

- The draw() function uses several if statements to react to which button is selected to color the cell appropriately.

- The handling of the true/false flag setting to determine which button is currently selected seems like bad repetitive code.
