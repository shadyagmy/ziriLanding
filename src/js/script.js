
$("html").removeClass("overflowHidden");

window.onload = function () {
  // WOW ANIMATION
  new WOW().init();
  $('#loading').fadeOut();
  $("html").removeClass("overflowHidden");
};

$(document).ready(function () {


  if (window.matchMedia('(max-width: 800px)').matches) {
    $(".submit_form").appendTo(".header_img");

    var detachedEl = $(".custom_input:last-of-type");
    $(".custom_input").eq(1).after(detachedEl)

} 
 

$(".btn.submitForm").on("click", (e) => {
  e.preventDefault();
  $(".nav").fadeOut(400);
  $(".nav_search").fadeOut(400);
  // $("header .header_main .header_img").css({
  //   marginTop:0
  // })
  $("header .header_main .header_img img").animate({
    width:0
  },1000,() => {
    $("header .header_main .header_img").fadeOut(400);
    $(".header_main_text").fadeOut(400,()=> {
      $(".thanks").fadeIn()
    })
  });

  $("header .header_main .shape").animate({
    top: "-64rem",
    
    transform: "scale(1.8)",
    width: "222%"
  },1000)


 



})









$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});

$(".custom-select-trigger, .custom-options").hover(function(){
  $(this).parents(".custom-select").addClass("opened");
  // event.stopPropagation();
  }, function(){
    $(this).parents(".custom-select").removeClass("opened");
    // event.stopPropagation();
});


$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});

 

  






}); //jquery end




