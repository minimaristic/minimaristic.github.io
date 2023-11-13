$(document).ready(function() {
  // Fade in the container
  $(".container").fadeIn(1000);

  // Add slide-down effect to the contact information
  $("#contacts").slideDown(1000);

  // Add fadeIn animation to the name
  $('#name').hide().fadeIn(1500);

  // Add fade-in effect to all text elements
  $('section').hide().each(function(index) {
    $(this).fadeIn(800 * (index + 1));
  });
});
