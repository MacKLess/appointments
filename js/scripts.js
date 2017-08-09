$(document).ready(function() {
  $("#input").submit(function(event) {
    var nameInput = $("input#name").val();
    var reasonInput = $("input#reason").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

  $(".name").text(nameInput);
  $(".reason").text(reasonInput);
  $(".date").text(dateInput);
  $(".start").text(startInput);
  $(".end").text(endInput);

  $("#confirmation").show();

  event.preventDefault();
  });
});
