const popular = [
  {id:1,name:'Nike Air Max',price:150,img:'https://images.unsplash.com/photo-1519744346367-3ce16e5b2ce9?auto=format&fit=crop&w=800&q=80'},
  {id:2,name:'Adidas Superstar',price:120,img:'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80'},
  {id:3,name:'Puma RS-X',price:130,img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'}
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