<?php
	$host = "127.0.0.1";
	$user = "root";
	$pass = "";
	$db = "mydatabase";

	$connect = mysqli_connect($host,$user,$pass,$db);
	if($connect)
		echo "connected succesfully to my database".PHP_EOL;
	$sql = "insert into blogposts (categories, blogposts) values ('test', 'testblogpost')";
	$query = mysqli_query($connect,$sql);
		if($query){
			echo "data entered succesfully";
		}else{
			echo mysqli_error ($connect);
		}
?>