var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));


$('.saveBtn').on('click', function(){
//need to target the value in the block and the time
    var textBox = $(this).siblings('.description').val();
    var hourBox = $(this).parent().attr('id');
//need to do a DOM traversal to move where we want within the html
    localStorage.setItem(hourBox, textBox);
    // console.log(textBox);  
    localStorage.getItem(hourBox);
/////////////////////////////////////////////////
    // document.getElementById("text").text = localStorage.getItem("textBox");
//////////////////////////////////////////////////////
    // var hourBox = localStorage.getItem(hourBox);
    // var items = localStorage.length;
// /////////////////////////////////////////
    // function getSavedText() {
    //     var storedText = localStorage.getItem("hourBox");
    //     document.getElementById("description").innerHTML = storedText;
        // var storedText = JSON.stringify(localStorage.getItem("textBox"));
        // if (storedText !== null) {
        //     textBox = storedText;
        // }
    // }

    // getSavedText();
    // console.log(textBox);
    // var savedText = localStorage.length;
});



//to figure out the past, present, and future of our timeblocks
function currentTime (){
    var currentHr = dayjs().hour();
    // console.log(currentHr);
//grabbing time blocks, and .each means to loop    
    $(".time-block").each(function(){
//define the block hour, make the string an integer, then identify the id on parent line of this (jquery style)
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);     
        // console.log($(this).attr("id"));   
        if (hourBlock < currentHr) {
            $(this).addClass("past")
        } else if (hourBlock === currentHr) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    });
}

//in order to execute, call it outside of the function
currentTime();
// //every 15 seconds this timer runs through the function
var interval = setInterval(currentTime, 15000);



//create function event.listenter on save button
//click the save button
//jquery way to target the class; on is the way to create eventlistener
// function saveDescription(event) {
//     var btn = event.target;
    // btn.addEventListener(event) {
    // document.getElementById("text").querySelectorAll("#text");
    // console.log (text);
    

    // localStorage.setItem(time-block, description);
    // console.log(description);






// var saveBtn = document.querySelector(".fa-solid fa-floppy-disk");
// saveBtn.addEventListener("click");
//create local storage get item for key (hour) and value(text


// if (window.localStorage) {

// if (window.localStorage["text"]) {
    // var text = localStorage["text"];
    // console.log (text);
    // var btn = document.querySelectorAll('.saveBtn');
    // document.getElementById("text").value = text;
    // console.log(text);
// }; 

//         var userText = document.getElementById("text").value;
//         localStorage.setItem("text", userText);
//         console.log(userText);
    
// });
// localStorage.setItem('hour', 'time-block');
// localStorage.setItem('description', 'text');

// var hour = localStorage.getItem('hour');
// var description = localStorage.getItem('description');

// var items = localStorage.length;