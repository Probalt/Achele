$('.container a').click(function () {
  $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  $(this).parent().toggleClass('active');
});