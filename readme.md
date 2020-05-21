The app should allow someone to enter a name. the name should then appear on the page inside a blue box with that person's given id number.


BREAKDOWN

Given the instructions above, describe all of the little steps you would have to do to implement it.


1. The app should allow someone to enter a name.
    - input -> type in name (string) - html
    - hit enter or click button to end their name
        - button on the page
        - listen for click event on the button
        - handle the click event
            - call a function
            - console.log the name
            - use .val() to get the name
    
    WHAT DOES DONE MEAN?: user can type it in, hit enter button, show up in console (what they typed)

    Q: store name somewhere....do we need it later?? Great question, not for this project.

2. the name should then appear on the page inside a blue box with that person's given id number.

    - append/put on the page
        - appending many things.... 
        - order doesn't matter, they need to be on the page
        - things must be nested
            - box: html element (div), 
                - blue.... css, id/class rule that's blue, bgcolor
            - inside the box
                - name: object, variable, string
                - id number: unique tag only for that one person/name
