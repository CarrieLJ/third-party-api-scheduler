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
//every 15 seconds this timer runs through our function
var interval=setInterval(currentTime, 15000);

//review times in javascript
//create function event.listenter on save button
//create local storage get item for key (hour) and value(text

