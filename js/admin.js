document.getElementById('delete-btn').addEventListener('click',()=>{
  const id = document.getElementById('delete-id').value;
  fetch('../php/delete_product.php',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'id='+id})
    .then(r=>r.text()).then(alert);
});