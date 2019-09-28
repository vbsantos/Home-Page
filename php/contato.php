<?php

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // A PARTIR DAQUI SEGUINDO O  GITHUB https://github.com/PHPMailer/PHPMailer 
    // E https://github.com/PHPMailer/PHPMailer/wiki/Troubleshooting
    // E O VÍDEO https://www.youtube.com/watch?v=gor2j4muG8A
    // JUNTAMENTE COM VÁRIAS PÁGINAS DO STACK OVERFLOW

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require './PHPMailer/src/Exception.php';
    require './PHPMailer/src/PHPMailer.php';
    require './PHPMailer/src/SMTP.php';

    $Mailer = new PHPMailer();

    //define que será usado SMTP
    $Mailer->isSMTP();

    //aceitar caracteres especiais
    $Mailer->Charser = 'UTF-8';

    //Configurações
    $Mailer->IsHTML(true);
    $Mailer->SMTPAuth = true;
    $Mailer->SMTPSecure = 'ssl';

    //Nome do servidor e Porta de saída do e-mail
    $Mailer->Host = 'tls://smtp.gmail.com:587';

    //Dados do usuário do e-mail de saída
    $Mailer->Username = 'xxx@gmail.com';
    $Mailer->Password = 'xxx';

    //E-mail remetente
    $Mailer->From = $email;

    //Nome do remetente
    $Mailer->FromName = $nome;

    //Assunto da mensagem
    $Mailer->Subject = "Contato - Startpage";

    //Conteúdo da mensagem
    $Mailer->Body = $mensagem;

    //Corpo da mensagem em texto
    $Mailer->AltBody = $mensagem;

    //Destinatário
    $Mailer->AddReplyTo($email);
    $Mailer->AddAddress('xxx@gmail.com');

    if($Mailer->Send()) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "E-mail NÃO enviado com sucesso!<br>" . $Mailer->ErrorInfo;
    }

    header("location:../index.html");

?>