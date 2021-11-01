<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitor_phone = $_POST['phone'];
$message = $_POST['message'];

$email_from = 'kyrylolvov@icloud.com';

$email_subject = "Новая заявка";

$email_body = "Имя: $name.\n".
                "Почта: $visitor_email.\n".
                "Телефон: $visitor_phone.\n".
                 "Сообщение: $message.\n";

$to = "welcome.do.design@gmail.com";

$headers .= "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");


?>