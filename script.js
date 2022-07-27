var timeDisplayEl = document.getElementById("timeDisplay");
var date = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var hour = moment().format('h:mm:ss a');
//function for displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  $(timeDisplayEl).text(rightNow);
}

displayTime();
//DOM time variables
var nineAM = $("9am")
var tenAM = $("10am")
var elevenAM = $("11am")
var twelvePM = $("12pm")
var onePM = $("13pm")
var twoPM = $("14pm")
var threePM = $("15pm")
var fourPM = $("16pm")
var fivePM = $("17pm")
var sixPM = $("18pm")
var sevenPM = $("19pm")
var clearBtnEl = $("clearBtn")

function background () {
      //for the changing of the bg colors based off the time
  $(".form-control").each(function () {
      var onTime = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      if (hour > onTime) {
          $(this).addClass("past");
      } else if (hour < onTime) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

background();


