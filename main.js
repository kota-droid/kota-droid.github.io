$(function(){
    $(".open").click(function(){
        $(this).parent().parent().find(".answer").slideToggle();
    });
    $(".hamburger").click(function(){
        if($(".hamburger-menu").hasClass("off")){
            $(".hamburger-menu").removeClass("off");
            $(".hamburger-menu").animate({"marginRight":"-10px"},300);
        }
    });
    $(".close").click(function(){
        $(".hamburger-menu").addClass("off");
        $(".hamburger-menu").animate({"marginRight":"-200px"},300);
    });
    $(".nav").click(function(){
        $(".hamburger-menu").addClass("off");
        $(".hamburger-menu").animate({"marginRight":"-200px"},0)
    });
    $(".nav-to-inquiry").click(function(){
        var position=$("#inquiry-form-part").offset().top;
        $("html,body").animate({scrollTop:position},1000,"swing");
    });
    $(".nav-to-features").click(function(){
        var position=$("#feature-part").offset().top;
        $("html,body").animate({scrollTop:position},1000,"swing");
    });
    $(".nav-to-price").click(function(){
        var position=$("#price-part").offset().top;
        $("html,body").animate({scrollTop:position},1000,"swing")
    });
    const $submitBtn=$(".submit-btn")
    $("#form input,#form textarea").on('change', function () {
        if (
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="email"]').val() !== "" &&
            $('#form input[type="checkbox"]').val() !== "" &&
            $("#form textarea").val() !=="" &&
            $('#form #privacyCheck').prop('checked') === true
        ){$submitBtn.prop('disabled', false);
          $(".submit-btn").css("opacity","1");
    } else {
        $submitBtn.prop('disabled', true);
    }
});
$('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfhPQylNuOSLLzC0HZCnL--NRuULJINAK7c2L8HMm73Vfw8kg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
  
let mySwiper = new Swiper(".swiper-container", {
    
});
})
