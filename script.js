var today = moment();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));

var timeblock = moment()
$("#timeblocks").text(today.format("H"));

moment().get('year');
moment().get('month'); // 0 to 11
moment().get('date');
moment().get('hour');


