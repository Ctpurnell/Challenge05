
// only way I could figure out how to make multiple blocks appear, and control them.....................
var textArea = document.querySelectorAll("textarea");
var saveBtn = document.querySelectorAll("button");
var timeBlock9 = document.querySelector("#hour-9");
var timeBlock10 = document.querySelector("#hour-10");
var timeBlock11 = document.querySelector("#hour-11");
var timeBlock12 = document.querySelector("#hour-12");
var timeBlock13 = document.querySelector("#hour-13");
var timeBlock14 = document.querySelector("#hour-14");
var timeBlock15 = document.querySelector("#hour-15");
var timeBlock16 = document.querySelector("#hour-16");
var timeBlock17 = document.querySelector("#hour-17");
console.log(saveBtn);

for (var i = 0; i < saveBtn.length; i++) {  // loops over array to save to local storage...................
  saveBtn[i].addEventListener("click", function (event) {
    console.log(event.target.parentElement.getAttribute("id"));
    var userInput = event.target.previousElementSibling.value;
    var timeBlock = event.target.parentElement.getAttribute("id");
    localStorage.setItem(timeBlock, userInput);
  });
}


//date on page!!.........................................................
var today = dayjs();
$("#currentDay").text(today.format("dddd MMM D, YYYY"));


//These save the value contained in the time slots to local storage.........
var hour9Data = localStorage.getItem("hour-9");
var hour9TB = timeBlock9.children[1];
hour9TB.value = hour9Data;

var hour10Data = localStorage.getItem("hour-10");
var hour10TB = timeBlock10.children[1];
hour10TB.value = hour10Data;

var hour11Data = localStorage.getItem("hour-11");
var hour11TB = timeBlock11.children[1];
hour11TB.value = hour11Data;

var hour12Data = localStorage.getItem("hour-12");  
var hour12TB = timeBlock12.children[1];
hour12TB.value = hour12Data;

var hour13Data = localStorage.getItem("hour-13");
var hour13TB = timeBlock13.children[1];
hour13TB.value = hour13Data;

var hour14Data = localStorage.getItem("hour-14");
var hour14TB = timeBlock14.children[1];
hour14TB.value = hour14Data;

var hour15Data = localStorage.getItem("hour-15");
var hour15TB = timeBlock15.children[1];
hour15TB.value = hour15Data;

var hour16Data = localStorage.getItem("hour-16");
var hour16TB = timeBlock16.children[1];
hour16TB.value = hour16Data;

var hour17Data = localStorage.getItem("hour-17");
var hour17TB = timeBlock17.children[1];
hour17TB.value = hour17Data;


//trying to change colors of text boxes.................................
$(function () {

  function timeCompare() {
    var currentTime = dayjs().hour();
    for (var i = 0; i < textArea.length; i++) {
      if (i + 8 < currentTime) textArea[i].classList.add("past");
      if (i + 8 == currentTime) textArea[i].classList.add("present");
      if (i + 8 > currentTime) textArea[i].classList.add("future"); 
    }
  }

  
  timeCompare();
});
