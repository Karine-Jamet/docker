$(document).ready(function() {

$("header .now i").on('click',function(e){
  $(".now").toggleClass('show');
  $("header .now i").toggleClass('fa-arrow-up');
  $(".now").toggleClass('hide');
  $("header .now i").toggleClass('fa-arrow-down');
});


$("a[href=contact]").on("click", function(e) {
  e.preventDefault();
  $(".formContact").removeClass("hide");
  subject = "Contact Devops-DDay";
});

  $("a[href=#sponsor]").on("click", function(e) {
    e.preventDefault();
    $(".formContact").removeClass("hide");
    subject = "Sponsor Devops-DDay";
  });

  $(".cancel").on("click", function(e) {
    e.preventDefault();
    $(".formContact").addClass("hide");
  });

  $(".formContact form").submit(function(event) {
    event.preventDefault();
    var name = $("input[name=name]").val();
    var prenom = $("input[name=prenom]").val();
    var message = $("textarea").val();
    var entreprise = $("input[name=entreprise]").val();
    var reply = $("input[name=email]").val();


    $("input[type=text]").val("");
    $("input[name=email]").val("");
    $("textarea").val("");
    $("input[name=entreprise]").val("");
    $(".formContact").addClass("hide");


    $.ajax({
        method: "POST",
        url: "https://formspree.io/l.bernard@treeptik.fr",
        data: {
          name: name,
          prenom: prenom,
          entreprise : entreprise,
          _subject: subject,
          _replyto: reply,
          message: message
        },
        dataType: "json"
      })
      .done(function() {
        alert("Votre e-mail à bien était envoyé !");
        // $(".formContact").addClass("hide");
      });
  });




});
