const products = [
  {id:1,name:'Nike Air Max',brand:'Nike',price:150,color:'white',img:'https://images.unsplash.com/photo-1519744346367-3ce16e5b2ce9?auto=format&fit=crop&w=800&q=80'},
  {id:2,name:'Adidas Superstar',brand:'Adidas',price:120,color:'black',img:'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80'},
  {id:3,name:'Puma RS-X',brand:'Puma',price:130,color:'red',img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'}
];
function renderCatalog(list){
  const container = document.getElementById('catalog-container');
  if(!container) return;
  container.innerHTML = list.map(p=>`<div class='card'>\
  <img src='${p.img}' alt='${p.name}'>\
  <h3>${p.name}</h3>\
  <p>$${p.price}</p>\
  <button onclick='addToCart(${JSON.stringify(p)})'>Add to cart</button>\
  </div>`).join('');
}
function applyFilters(){
  let list = products.slice();
  const brand = document.getElementById('brand-filter').value;
  const search = document.getElementById('search').value.toLowerCase();
  const price = document.getElementById('price-filter').value;
  if(brand) list = list.filter(p=>p.brand===brand);
  if(search) list = list.filter(p=>p.name.toLowerCase().includes(search));
  if(price) list = list.filter(p=>p.price<=price);
  renderCatalog(list);
}
document.addEventListener('DOMContentLoaded',()=>{
  renderCatalog(products);
  document.getElementById('brand-filter').addEventListener('change', applyFilters);
  document.getElementById('search').addEventListener('input', applyFilters);
  document.getElementById('price-filter').addEventListener('input', applyFilters);
  updateCartCount();
});