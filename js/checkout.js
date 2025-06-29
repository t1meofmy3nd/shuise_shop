function getCart(){
  return JSON.parse(localStorage.getItem('cart')||'[]');
}

document.addEventListener('DOMContentLoaded',()=>{
  const cartInput = document.getElementById('cart-data');
  if(cartInput){
    cartInput.value = JSON.stringify(getCart());
  }
});