$("dl.menu").on("click", "dd > a", function() {

	var $menuItem = $("dd > a");

	$menuItem.removeClass("menu--tour--active")
	$(this).addClass("menu--tour--active"); 

	

});