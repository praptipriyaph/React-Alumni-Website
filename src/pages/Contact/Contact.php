<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: *');
    header('Content-Type: application/json');
     
    $conn = new mysqli("localhost","root","","alumniwebsite");
     
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

        // $first_name = isset($_POST['first_name']) ? $_POST['first_name'] : '';
        // $last_name = isset($_POST['last_name']) ? $_POST['last_name'] : '';
        // $email = isset($_POST['email']) ? $_POST['email'] : '';
        // $alum_name = isset($_POST['alum_name']) ? $_POST['alum_name'] : '';
        // $reason = isset($_POST['reason']) ? $_POST['reason'] : '';
        // $history = isset($_POST['history']) ? $_POST['history'] : '';
        // $msg = isset($_POST['msg']) ? $_POST['msg'] : '';

    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $alum_name = $_POST["alum_name"];
    $reason = $_POST["reason"];
    $history = $_POST["history"];
    $msg = $_POST["msg"];
        
    $sql = "INSERT INTO requests(first_name, last_name, email, alum_name, reason, history, msg) VALUES('$first_name', '$last_name', '$email', '$alum_name', '$reason', '$history', '$msg')";
    $res = mysqli_query($conn, $sql);
        
    if($res){
        echo "Success!";
    }
    else{
        echo "Error!";
    }
    $conn->close();
?>