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

  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    imagesLoaded: true,
    prevNextButtons: false,
    autoPlay: true
  });

  // reference: https://stackoverflow.com/questions/2507030/email-validation-using-jquery
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  //smooth scrolling
  // @source https://css-tricks.com/smooth-scrolling-accessibility/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });
});
