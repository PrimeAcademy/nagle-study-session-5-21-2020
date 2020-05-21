$(document).ready(start);

function start() {
  console.log("ready to go", $);

  // DONE: ccan type it in, click button, 
  // show up in console (what they typed)

  //     - listen for click event on the button
  //     - handle the click event
  //         - call a function
  $("#submitName").on("click", addName);
}

function addName() {
    console.log('in here');
    
    // use .val() to get the name
    let newName = $('#name').val();
    
    // console.log the name
    console.log('entered this name:', newName );


    // goal: append a div with the name in it
    // choose a target
    // append the box
    // append the name in the box
    // $('#nameContainer').append(`<div>${newName}</div>`);

    // goal: turn it blue

    //         - blue.... css, id/class rule that's blue, bgcolor
    //     - inside the box
    //         - name: object, variable, string
    
    
    // - id number: unique tag only for that one person/name
    // make a unique number


    // goal: show a number in each box
    $('#nameContainer').append(`<div>${newName}
        <p>number: 1</p>
        </div>`);



}

