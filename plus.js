$('.accordion-item a').click(function () {
  $('.plus-minus-toggle').addClass('collapsed');
  $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  // $(this).parent().toggleClass('active');
});
