<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "musclestation_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("<h2>Connection Failed:</h2> " . $conn->connect_error . 
        "<br>Check: <br>
        1. XAMPP services are running<br>
        2. Database name in phpMyAdmin<br>
        3. MySQL credentials");
}

echo "<h2>Successfully Connected!</h2>";
echo "MySQL Server Version: " . $conn->server_version;

// Close connection
$conn->close();
?>