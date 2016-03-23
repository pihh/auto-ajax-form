<?php

	$string = "Input value: ".htmlspecialchars($_POST['text-input-1']);

	$return = array($string,$_FILES);

	echo json_encode($return);

