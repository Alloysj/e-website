<?php
$servername = "localhost"; // Replace with your MySQL server hostname (usually "localhost" for local development).
$username = "your_mysql_username"; // Replace with your MySQL username.
$password = "King8002#"; // Replace with your MySQL password.
$dbname = "ecommerce"; // Replace with the name of your database.

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
// Select data from a table
$sql = "SELECT column1, column2 FROM your_table_name";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data from each row
    while ($row = $result->fetch_assoc()) {
        echo "Column 1: " . $row["column1"] . " - Column 2: " . $row["column2"] . "<br>";
    }
} else {
    echo "No results found.";
}

// Close the database connection
$conn->close();
?>
