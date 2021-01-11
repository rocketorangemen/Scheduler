var today = document.getElementById('currentDay');
today.textContent = "Today's date is: " + moment().format("MMMM Do YYYY");

if (localStorage == null) {
    localStorage.getItem(time);
}

var currentHour = moment().format("HH");

var hours = $("textarea");

var time;
var task;

// localStorage.getItem(time);
localStorage.getItem(task);
// JSON.parse(localStorage.getItem(time));
// JSON.parse(localStorage.getItem(task));


for (var i = 0; i < hours.length; i++) {
    var times = $(hours[i]).attr("id");
    if (times < currentHour) {
        $(hours[i]).addClass("bg-secondary");
    }
    else if (times == currentHour) {
        $(hours[i]).addClass("bg-danger");
    }
}

setInterval (function() {
currentHour = moment().format("HH");
    for (var i = 0; i < hours.length; i++) {
    var times = $(hours[i]).attr("id");
    if (times < currentHour) {
        $(hours[i]).removeClass("bg-danger").addClass("bg-secondary");
    }
    else if (times == currentHour) {
        $(hours[i]).addClass("bg-danger");
    }
}}, 1000);

$(".saveBtn").on("click", function () {
    var time = $(this).siblings("textarea").attr("id");
    var task = $(this).siblings("textarea").val();
    localStorage.setItem(time, task);
});

$("#09").val(localStorage.getItem("09"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
$("#18").val(localStorage.getItem("18"));