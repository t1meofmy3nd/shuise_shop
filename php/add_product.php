<?php
require 'connect.php';
$name = $_POST['name'] ?? '';
$brand = $_POST['brand'] ?? '';
$size = $_POST['size'] ?? '';
$price = $_POST['price'] ?? '';
if(isset($_FILES['img'])){
    $imgName = basename($_FILES['img']['name']);
    $path = '../img/sneakers/' . $imgName;
    move_uploaded_file($_FILES['img']['tmp_name'], $path);
}else{
    $imgName = '';
}
if($name){
    $stmt = $pdo->prepare('INSERT INTO products(name,brand,size,price,img) VALUES(?,?,?,?,?)');
    $stmt->execute([$name,$brand,$size,$price,'img/sneakers/'.$imgName]);
}
header('Location: ../admin/admin-panel.html');
?>