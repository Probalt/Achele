const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  if (this.classList.value == "active") {
  	$(".active").removeClass('active');} 
  else {
  	$(".active").removeClass('active');
  	this.classList.toggle('active');
  	this.nextElementSibling.classList.toggle('active');
  };
};

items.forEach(item => item.addEventListener('click', toggleAccordion));
