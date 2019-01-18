$(function() {
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
    let text = $('input[class="text"]').val();
    if (isEmail(text)) {
      alert("Thanks for subscribing.");
    } else {
      alert("The email address is invalid.");
    }
  });
});

$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true
});

// reference: https://stackoverflow.com/questions/2507030/email-validation-using-jquery
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
