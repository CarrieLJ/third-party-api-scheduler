var today = moment();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
var userTasks = $('.saveBtn');


//to figure out the past, present, and future of our timeblocks
function currentTime (){
    var currentHr = moment().hours();
    console.log(currentHr);
//grabbing time blocks, and .each means to loop    
    $(".time-block").each(function(){
//define the block hour, make the string an integer, then identify the id on parent line of this (jquery style)
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);        
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
//every 15 seconds this timer runs through the function
var interval = setInterval(currentTime, 15000);

//create function event.listenter on save button
//click the save button
userTasks.on('click', function () {
    // if (isDark) {
    //   $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    //   isDark = !isDark;
    // } else {
    //   $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    //   isDark = !isDark;
    // }
  });
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