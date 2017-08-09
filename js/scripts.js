$(document).ready(function() {
  $("#input").submit(function(event) {
    var nameInput = $("input#name").val();
    var reasonInput = $("input#reason").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

  $(".requestor").text(nameInput);
  $(".cause").text(reasonInput);
  $(".day").text(dateInput);
  $(".begin").text(startInput);
  $(".finish").text(endInput);

  $("#confirmation").show();

  event.preventDefault();
  });
});
