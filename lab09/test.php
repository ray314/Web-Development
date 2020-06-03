<?php
session_start();
//error_reporting(E_ERROR | E_PARSE);
// If cart session variable doesn't exist then create a new one
if (!isset($_SESSION["Cart"])) {
    // 
    $cart = new stdClass();
    $cart->book = array();
    $cart->isbn = array();
    $cart->cost = array();
    $cart->value = array();
    $cart->totalCost = 0;
    $_SESSION["Cart"] = $cart;
} else {
    $cart = $_SESSION["Cart"];
}
// Use an object to store data
$id = $_GET["id"];
$cart->book[$id] = $_GET["book"];
$cart->isbn[$id] = $_GET["isbn"];
$action = $_GET["action"]; // Add or Remove
$cart->cost[$id] = $_GET["cost"]; // Cost of book

// If value set then do action
if (isset($cart->value[$id]))
{
    if ($action == "Add")
    {
        $cart->value[$id]++;
        $cart->totalCost += $cart->cost[$id];
        // Round to 2 digits
        $cart->totalCost = round($cart->totalCost, 2, PHP_ROUND_HALF_UP);
    }
    else if ($cart->value > 0)
    {
        $cart->value[$id]--;
        $cart->totalCost -= $cart->cost[$id];
        $cart->totalCost = round($cart->totalCost, 2, PHP_ROUND_HALF_UP);
    }
}
else
{
    $cart->value[$id] = 1;
}

$_SESSION["Cart"] = $cart;

//if ($cart->value[$id] != 0) {
    echo json_encode($cart);
//} else {
//    echo "";
//}
		
?>
