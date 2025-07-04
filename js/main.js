const popular = [
  {id:1,name:'Nike Air Max',price:150,img:'img/sneakers/sneaker1.png'},
  {id:2,name:'Adidas Superstar',price:120,img:'img/sneakers/sneaker2.png'},
  {id:3,name:'Puma RS-X',price:130,img:'img/sneakers/sneaker3.png'}
];

function renderCards(containerId, items){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = items.map(p=>`<div class='card'><a href='product.html?id=${p.id}'><img src='${p.img}' alt='${p.name}'><h3>${p.name}</h3><p>$${p.price}</p></a></div>`).join('');
}

document.addEventListener('DOMContentLoaded',()=>{
  renderCards('popular-container', popular);
  renderCards('new-container', popular);
});