<?php
$mail = $_POST['mail'];

//Database connection
$conn = new mysqli('db5006020231.hosting-data.io','dbu1902318', 'Monzicki13.', 'dbs5042319');
if ($conn->connect_error) {
    die('Connection Failed : '.$conn->connect_error);
}else {
    $stmt = $conn->prepare("insert into newsletter(mail)
   values(?)");
    $stmt->bind_param("s",$mail);
    $stmt->execute();
    echo "registration Succesfully...";
    $stmt->close();
    $conn->close();
    die();
}







?>

<!DOCTYPE html>
<html>

<head>
    <title>HTML Redirect</title>
    <meta http-equiv="refresh"
          content="5; url = https://ide.geeksforgeeks.org" />
</head>

<body>
<h1 style="text-align:center;color:green;">
    GeeksforGeeks
</h1>

<p style="text-align:center;">
    If your browser supports Refresh,
    you'll be redirected to GeeksforGeeks
    Homepage, in 5 seconds.
</p>

</body>

</html>


