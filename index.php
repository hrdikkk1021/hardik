<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "daily_log";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $wakeupTime = $_POST['wakeupTime'];
    $physicalActivity = $_POST['physicalActivity'];
    $foodTime = $_POST['foodTime'];
    $lunch = $_POST['lunch'];
    $breakfast = $_POST['breakfast'];
    $snacks = $_POST['snacks'];
    $dinner = $_POST['dinner'];
    $akantDhyan = $_POST['akantDhyan'];
    $samuhikDhyan = $_POST['samuhikDhyan'];
    $unhealthyFood = $_POST['unhealthyFood'];
    $healthyFood = $_POST['healthyFood'];
    $sleepTime = $_POST['sleepTime'];

    // Insert data into the database
    $sql = "INSERT INTO logs (name, wakeup_time, physical_activity, food_time, lunch, breakfast, snacks, dinner, akant_dhyan, samuhik_dhyan, unhealthy_food, healthy_food, sleep_time) 
            VALUES ('$name', '$wakeupTime', '$physicalActivity', '$foodTime', '$lunch', '$breakfast', '$snacks', '$dinner', '$akantDhyan', '$samuhikDhyan', '$unhealthyFood', '$healthyFood', '$sleepTime')";

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Log</title>
</head>
<body>
    <h1>Daily Log</h1>
    <form method="POST" action="">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required><br>

        <label for="wakeupTime">Wakeup Time:</label>
        <input type="time" name="wakeupTime" id="wakeupTime" required><br>

        <label for="physicalActivity">Physical Activity:</label>
        <input type="text" name="physicalActivity" id="physicalActivity"><br>

        <label for="foodTime">Food Time:</label>
        <input type="text" name="foodTime" id="foodTime"><br>

        <label for="lunch">What did you eat in lunch?</label>
        <textarea name="lunch" id="lunch"></textarea><br>

        <label for="breakfast">What did you eat in breakfast?</label>
        <textarea name="breakfast" id="breakfast"></textarea><br>

        <label for="snacks">What did you eat in evening snacks?</label>
        <textarea name="snacks" id="snacks"></textarea><br>

        <label for="dinner">What did you eat in dinner?</label>
        <textarea name="dinner" id="dinner"></textarea><br>

        <label for="akantDhyan">Akant Dhyan:</label>
        <select name="akantDhyan" id="akantDhyan">
            <option value="YES">YES</option>
            <option value="NO">NO</option>
        </select><br>

        <label for="samuhikDhyan">Samuhik Dhyan:</label>
        <select name="samuhikDhyan" id="samuhikDhyan">
            <option value="YES">YES</option>
            <option value="NO">NO</option>
        </select><br>

        <label for="unhealthyFood">Unhealthy Food:</label>
        <textarea name="unhealthyFood" id="unhealthyFood"></textarea><br>

        <label for="healthyFood">Healthy Food:</label>
        <textarea name="healthyFood" id="healthyFood"></textarea><br>

        <label for="sleepTime">Sleep Time:</label>
        <input type="time" name="sleepTime" id="sleepTime" required><br>

        <button type="submit">Submit</button>
    </form>

    <h2>Daily Log Records</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Wakeup Time</th>
                <th>Physical Activity</th>
                <th>Food Time</th>
                <th>Lunch</th>
                <th>Breakfast</th>
                <th>Snacks</th>
                <th>Dinner</th>
                <th>Akant Dhyan</th>
                <th>Samuhik Dhyan</th>
                <th>Unhealthy Food</th>
                <th>Healthy Food</th>
                <th>Sleep Time</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Display records
            $conn = new mysqli($servername, $username, $password, $dbname);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "SELECT * FROM logs";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                        <td>" . $row['name'] . "</td>
                        <td>" . $row['wakeup_time'] . "</td>
                        <td>" . $row['physical_activity'] . "</td>
                        <td>" . $row['food_time'] . "</td>
                        <td>" . $row['lunch'] . "</td>
                        <td>" . $row['breakfast'] . "</td>
                        <td>" . $row['snacks'] . "</td>
                        <td>" . $row['dinner'] . "</td>
                        <td>" . $row['akant_dhyan'] . "</td>
                        <td>" . $row['samuhik_dhyan'] . "</td>
                        <td>" . $row['unhealthy_food'] . "</td>
                        <td>" . $row['healthy_food'] . "</td>
                        <td>" . $row['sleep_time'] . "</td>
                    </tr>";
                }
            } else {
                echo "<tr><td colspan='13'>No records found</td></tr>";
            }

            $conn->close();
            ?>
        </tbody>
    </table>
</body>
</html>