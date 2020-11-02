<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM reports';
$vars = [];

if (isset($_GET['reportsID'])) {
//   // This is an example of a parameterized query
$sql = 'SELECT * FROM reports
WHERE reportsID = ?';
$vars = [ $_GET['reportsID'] ];
}


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$reportsList = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($reportsList, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
