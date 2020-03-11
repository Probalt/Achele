const items = document.querySelectorAll(".accordion a");
// const actives = document.querySelectorAll(".active");

function toggleAccordion(){
  $(".active").removeClass('active');
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

// function toggleAcco(){
//   this.classList.toggle('active');
//   this.nextElementSibling.classList.toggle('active');
// }

// function toggleActive(){
//   this.classList.toggle('active');
//   this.nextElementSibling.classList.toggle('active');	
// }

items.forEach(item => item.addEventListener('click', toggleAccordion));

// actives.forEach(active => active.addEventListener('click', toggleActive));

// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });
