var today = document.getElementById('currentDay');
today.textContent = moment().format("MMMM Do YYYY");

var currentHour = moment().format("HH");

var hours = $("textarea");
console.log(hours);

var time;
var task;

// localStorage.getItem(time);
// localStorage.getItem(task);
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

$("textarea").value = localStorage.getItem(time);