const products = [
  {id:1,name:'Nike Air Max',brand:'Nike',size:42,price:150,color:'white',img:'img/sneakers/sneaker1.png'},
  {id:2,name:'Adidas Superstar',brand:'Adidas',size:41,price:120,color:'black',img:'img/sneakers/sneaker2.png'},
  {id:3,name:'Puma RS-X',brand:'Puma',size:43,price:130,color:'red',img:'img/sneakers/sneaker3.png'}
];

function getProduct(id){
  return products.find(p=>p.id===id);
}

document.addEventListener('DOMContentLoaded',()=>{
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'),10);
  const product = getProduct(id);
  const container = document.getElementById('product-detail');
  if(product && container){
    container.innerHTML = `
      <h2>${product.name}</h2>
      <img src='${product.img}' alt='${product.name}'>
      <p>Brand: ${product.brand}</p>
      <p>Size: ${product.size}</p>
      <p>Price: $${product.price}</p>
      <button id='add-btn'>Add to cart</button>
    `;
    document.getElementById('add-btn').addEventListener('click',()=>addToCart(product));
  }
});