$('.navicon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('navicon--active');
    $('.toggle').toggleClass('toggle--active');
});
  
$('li').on('click',function(){
		$('li').removeClass('active');
		$('li').removeClass('secondary-active');
		$(this).addClass('active');
		$(this).prevAll().addClass('secondary-active');
});  
  
  
  