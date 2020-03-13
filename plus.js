$('.accordion-item a').click(function () {
	console.log(this.lastChild.classList.value)
  if (this.lastChild.classList.value != "plus-minus-toggle collapsed") {
    $('.plus-minus-toggle').addClass('collapsed'); } 
  else {
  	$('.plus-minus-toggle').addClass('collapsed');
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  };
  // $(this).parent().toggleClass('active');
});
