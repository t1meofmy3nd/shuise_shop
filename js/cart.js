function getCart(){
  return JSON.parse(localStorage.getItem('cart')||'[]');
}
function setCart(cart){
  localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(product){
  const cart = getCart();
  const existing = cart.find(p=>p.id===product.id);
  if(existing) existing.qty += 1; else cart.push({...product, qty:1});
  setCart(cart);
  updateCartCount();
}
function updateCartCount(){
  const countEl = document.getElementById('cart-count');
  if(countEl) countEl.textContent = getCart().reduce((sum,p)=>sum+p.qty,0);
}
function renderCart(){
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('total-price');
  if(!itemsEl || !totalEl) return;
  const cart = getCart();
  itemsEl.innerHTML = cart.map(p=>`<div>${p.name} x${p.qty} - $${p.price*p.qty}</div>`).join('');
  const total = cart.reduce((sum,p)=>sum+p.price*p.qty,0);
  totalEl.textContent = 'Total: $'+total;
}
document.addEventListener('DOMContentLoaded',()=>{
  updateCartCount();
  renderCart();
  const checkoutBtn = document.getElementById('checkout-btn');
  if(checkoutBtn){
    checkoutBtn.addEventListener('click',()=>{
      window.location='checkout.html';
    });
  }
});