$('.navbar-nav').click(function() {
  $('.navbar-collapse').collapse('hide');
});


$(function(){
const items = $('.nav-item') ;
  items.on('click', function(){
      items.removeClass('active') ;
      $(this).addClass('active') ;
});

$('#title').on('click', function(){
  console.log("ok");
    items.removeClass('active') ;
    items.first().addClass('active') ;
  })
});
