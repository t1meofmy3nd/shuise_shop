<?php
require 'connect.php';
session_start();

$cart = json_decode($_POST['cart'] ?? '[]', true);
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$address = $_POST['address'] ?? '';
$payment = $_POST['payment'] ?? '';
$total = array_reduce($cart, fn($sum,$p)=>$sum + $p['price']*$p['qty'], 0);
$details = json_encode($cart);
$userId = $_SESSION['user_id'] ?? null;

if($cart && $userId){
    $stmt = $pdo->prepare('INSERT INTO orders(user_id,name,phone,email,address,payment,details,total) VALUES(?,?,?,?,?,?,?,?)');
    $stmt->execute([$userId,$name,$phone,$email,$address,$payment,$details,$total]);
    echo 'order saved';
}else{
    http_response_code(400);
    echo 'error';
}
?>