<?php 

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once('phpmailer/PHPMailerAutoload.php');

$name = isset($_POST['name']) ? $_POST['name'] : '';
$phone = isset($_POST['number']) ? $_POST['number'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->SMTPDebug = 2; // Включить отладку

$mail->isSMTP();
$mail->Host = 'acloud-3.hoster.kz';
$mail->SMTPAuth = true;
$mail->Username = 'sait@tmzsk.kz';
$mail->Password = 'Aa51cy1barin@!';
$mail->SMTPSecure = 'TLS';
$mail->Port = 587;

$mail->setFrom('sait@tmzsk.kz', 'tmzsk.kz'); // исправлено
$mail->addAddress('info@tmzsk.kz');

$mail->isHTML(true);
$mail->Subject = 'Данные';
$mail->Body    = '
	Пользователь оставил данные <br> 
	Имя: ' . htmlspecialchars($name) . ' <br>
	Номер телефона: ' . htmlspecialchars($phone) . '<br>
	E-mail: ' . htmlspecialchars($email) . '';

if(!$mail->send()) {
    echo "error: " . $mail->ErrorInfo; // Выводим ошибку в AJAX
} else {
    echo "success"; // Отправляем успешный ответ
}

?>