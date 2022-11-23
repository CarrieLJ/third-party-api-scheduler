var today = moment();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));

// var timeblock = moment()
// $("#timeblocks").text(today.format("H"));

// moment().get('year');
// moment().get('month'); // 0 to 11
// moment().get('date');
// moment().get('hour');

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

//review times in javascript
//create function event.listenter on save button
// var saveBtn = document.querySelector(".fa-solid fa-floppy-disk");
// saveBtn.addEventListener("click");
//create local storage get item for key (hour) and value(text


// if (window.localStorage) {
//     // var savedHour = document.getElementById ('hour')
//     var userText = document.getElementById('text');

//     // savedHour.value = localStorage.getItem('hour');
//     userText.value = localStorage.getItem('text');

//     // savedHour.addEventListener('input', function() {
//     //     localStorage.setItem('text', userText.value);
//     //     console.log(text);
//     // })

//     userText.addEventListener('input', function() {
//         localStorage.setItem('text', userText.value);
//         console.log(text);
//     })
// }

if (window.localStorage["text"]) {
    var text = localStorage["text"];
    var btn = document.querySelector('.saveBtn');
    document.getElementById("text").value = text;
}; 
saveBtn.addEventListener("click", function() {
        var userText = document.getElementById("text").value;
        localStorage.setItem("text", userText);
        console.log(userText);
    
});