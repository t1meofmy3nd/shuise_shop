const reviews = [
  {user:'Alex',text:'Great shoes, fast delivery!'},
  {user:'Maria',text:'Quality is top-notch.'},
  {user:'John',text:'Love the variety of brands.'}
];

function renderReviews(){
  const container = document.getElementById('reviews-carousel');
  if(!container) return;
  container.innerHTML = reviews.map(r=>`<div class='review'><strong>${r.user}</strong><p>${r.text}</p></div>`).join('');
}

document.addEventListener('DOMContentLoaded', renderReviews);