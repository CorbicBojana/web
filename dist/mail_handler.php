<?php
  if(isset($POST_["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $msg = $_POST["msg"];
    $toEmail = "corbicbojana@gmail.com";

    $subject = 'Form Submission';
    $message = "Name: " . $name . "\n" . "Wrote " . "\n\n" . $msg;
    $headers = "From: " . $email;

    if(mail($toEmail, $name, $headers)) {
        echo "<h1>Sent</h1>"
    }
    else {
        echo "Wrong!"
    }
  }

?>