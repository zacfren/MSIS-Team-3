<?php

require 'common.php';

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection

// ADD REST OF FIELDS
$stmt = $db->prepare($sql = 'UPDATE person SET fname = ?, lname = ?, address = ? WHERE empID=?');
  $stmt->execute([$_POST['fname'], $_POST['lname'], $_POST['address'], $_POST['empID']]);

$person = $stmt->fetchAll();
$json = json_encode($person, JSON_PRETTY_PRINT);

// If needed, get auto-generated PK from DB
 //$certificationID = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('Content-Type: application/json');
echo $json;
