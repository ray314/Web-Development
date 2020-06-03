<?php

session_start();

$bookName = $_GET["book"];
$action = $_GET["action"];
$book_price = $_GET["book_price"];
$book_isbn = $_GET["book_isbn"];

		if (array_key_exists($bookName, $_SESSION)){  //each book has a $_SESSION array called the name of the book
            $cart = $_SESSION[$bookName]; 
           
            if (!isset ($_SESSION["display_cost"])) { //"display_cost" is total cost of all books
                    $_SESSION["display_cost"] = 0 ;
            }
            $value = $_SESSION["display_cost"];

            //add book
            if ($action == "Add") {              
                if ($cart[$bookName] != ""){
                    $number = $cart[$bookName] + 1;
                    $cart[$bookName] = $number;
                } else {
                    $cart[$bookName] = "1";
                }

                //total cost
                if ($value != 0) {  
                    $value += $book_price;
                    $cost = "price";
                    $cart[$cost] = $value;
                } else {
                    $value = $book_price;
                    $cost = "price";
                    $cart[$cost] = $value; 
                }

            } else { //remove book
                $number = $cart[$bookName] -1;
                $cart[$bookName] = $number;

                $value = $value - $book_price;
                $cost = "price";
                $cart[$cost] = $value; 
            }
        } else {
            //first time adding a particular book
            $cart[$bookName] = "1";

            if (!isset ($_SESSION["display_cost"])) {
                $_SESSION["display_cost"] = 0 ;
            }
            $value = $_SESSION["display_cost"];

            $value += $book_price;
            $cost = "price";
            $cart[$cost] = $value; 
        }

        $_SESSION["display_cost"] = $value;
        $isbn = "book_isbn";
        $cart[$isbn] = $book_isbn;
        $_SESSION[$bookName] = $cart; 

        echo json_encode($cart, JSON_PRETTY_PRINT);		
        //$_SESSION = array(); clears $_SESSION
?>
