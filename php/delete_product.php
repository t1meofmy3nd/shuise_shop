<?php
require 'connect.php';
$id = $_POST['id'] ?? 0;
if($id){
    $stmt = $pdo->prepare('DELETE FROM products WHERE id=?');
    $stmt->execute([$id]);
    echo 'deleted';
}
?>s