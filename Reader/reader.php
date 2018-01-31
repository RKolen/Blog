<?php
header("Content-Type:application/json");
	$verb = $_SERVER['REQUEST_METHOD'];
	if ($verb == 'GET') {
		if (isset($_GET['categories'])) {
			$json_response = returnBlogposts();
			echo $json_response;
		} else {
			http_response_code(200);
			
		}


	}

	function returnBlogposts () {
	$host = "127.0.0.1";
	$user = "root";
	$pass = "";
	$db = "mydatabase";

	$connection = mysqli_connect($host, $user, $pass, $db);
	//if($connection)
		//echo "connected succesfully to my database".PHP_EOL;
	$sql = "SELECT * FROM blogposts";
	$result = $connection->query($sql);
	$answer = array();
	foreach ($result as $row) {
		$answer[] = array($row['id'], $row['categories'], $row['blogposts']);
	}
	$json_answer = json_encode($answer);
	return $json_answer;
	$connection = null;
	}
