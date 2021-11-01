<?php
    $name = $_Post['name']
    $visitorEmail = $_Post['email']
    $phone = $_Post['phone']
    $message: $_Post['message']

    $emailFrom = 'lvovkirill2015@gmail.com'

    $emailSubject = 'New Form Submission'

    $emailBody = "Имя: $name.\n".
                 "Email: $visitorEmail\n".
                 "Телефон: $phone.\n".
                 "Сообщкеик: $message.\n";
    
    $to = 'lvovkirill2015@gmail.com'

    $headers = "From: $emailFrom \r\n"

    $headers .= "Reply-to $visitorEmail \r\n"

    mail($to,$emailSubject,$emailBody,$headers)

    header("Location: contact.html")
?>