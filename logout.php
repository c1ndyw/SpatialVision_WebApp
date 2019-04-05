<?php
	//	## Destroy all session
	session_start(); 
	$_SESSION = array(); 
	session_destroy();
	//	## Redirect to home page
	header("location:index.php"); 
?>
