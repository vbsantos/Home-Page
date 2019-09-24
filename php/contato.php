<?php

    if(isset($_POST["email"]) && !empty($_POST["email"])) {
        $nome = addslashes($_POST["nome"]);
        $email = addslashes($_POST["email"]);
        $mensagem = addslashes($_POST["mensagem"]);

        $to = "vinicius.bohrer@ecomp.ufsm.br";
        $subject = "Contato - Startpage";
        $body = "Nome: " . $nome . "\n" . "E-mail: " . $email . "\n" . "Mensagem: " . $mensagem;
        // O HEADER TEM QUE COMEÇAR COM FROM, OBRIGATORIAMENTE
        // E O EMAIL TEM QUE PERTENCER AO DOMÍNIO NO QUAL O SCRIPT TA RODANDO
        $header = "From: contato@startpage.com.br\n" . "Reply-To: " . $email . "\n" . "X=Mailer:PHP/" . phpversion();

        echo("From:" . $nome . " (" . $email . ")\n" . "Message:" . $mensagem);

        if(mail($to, $subject, $body, $header)) {
            echo("E-mail enviado com sucesso.")
        } else {
            echo("Erro ao enviar e-mail.")
        }
    }

?>