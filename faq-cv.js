const cvitems = document.querySelectorAll('.accordion > .accordion-item-cv > a');

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
};

cvitems.forEach(item => item.addEventListener('click', toggleAccordion));