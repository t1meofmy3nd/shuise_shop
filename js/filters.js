const products = [
  {id:1,name:'Nike Air Max',brand:'Nike',size:42,price:150,color:'white',img:'img/sneakers/sneaker1.png'},
  {id:2,name:'Adidas Superstar',brand:'Adidas',size:41,price:120,color:'black',img:'img/sneakers/sneaker2.png'},
  {id:3,name:'Puma RS-X',brand:'Puma',size:43,price:130,color:'red',img:'img/sneakers/sneaker3.png'}
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
  const size = document.getElementById('size-filter').value;
  const search = document.getElementById('search').value.toLowerCase();
  const price = document.getElementById('price-filter').value;
  if(brand) list = list.filter(p=>p.brand===brand);
  if(size) list = list.filter(p=>String(p.size)===size);
  if(search) list = list.filter(p=>p.name.toLowerCase().includes(search));
  if(price) list = list.filter(p=>p.price<=price);
  renderCatalog(list);
}
document.addEventListener('DOMContentLoaded',()=>{
  renderCatalog(products);
  document.getElementById('brand-filter').addEventListener('change', applyFilters);
  document.getElementById('size-filter').addEventListener('change', applyFilters);
  document.getElementById('search').addEventListener('input', applyFilters);
  document.getElementById('price-filter').addEventListener('input', applyFilters);
  updateCartCount();
});