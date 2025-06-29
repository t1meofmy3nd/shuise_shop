<?php
require 'connect.php';

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if($email && $password){
    $stmt = $pdo->prepare('SELECT * FROM users WHERE email=?');
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if($user && password_verify($password, $user['password'])){
        session_start();
        $_SESSION['user_id'] = $user['id'];
        header('Location: ../index.html');
    }else{
        echo 'Invalid credentials';
    }
}else{
    echo 'Missing data';
}
?>