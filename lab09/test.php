<?php
session_start();
//error_reporting(E_ERROR | E_PARSE);
// If cart session variable doesn't exist then create a new one
if (!isset($_SESSION["Cart"])) {
    // 
    $cart = new stdClass();
    $_SESSION["Cart"] = $cart;
} else {
    $cart = $_SESSION["Cart"];
}
// Use an object to store data
$cart->book = $_GET["book"];
$cart->isbn = $_GET["isbn"];
$action = $_GET["action"]; // Add or Remove
$cost = $_GET["cost"]; // Cost of book


// If value set then do action
if (isset($cart->value))
{
    if ($action == "Add")
    {
        $cart->value++;
        $cart->totalCost += $cost;
    }
    else if ($cart->value > 0)
    {
        $cart->value--;
        $cart->totalCost -= $cost;
    }
}
else
{
    $cart->value = 1;
}

$_SESSION["Cart"] = $cart;

if ($cart->value != 0) {
    echo json_encode($cart);
} else {
    echo "";
}
		
?>
