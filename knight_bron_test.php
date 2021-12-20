<?php
header("Access-Control-Allow-Origin: *");
// заявки в корп базу
$ded_login = '6000';
$ded_password = 'de123400000z';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('phpmailer/src/Exception.php');
require_once('phpmailer/src/PHPMailer.php');
require_once('phpmailer/src/SMTP.php');

$mail = new PHPMailer(true);
$mail->SMTPDebug = 2;
$mail->isSMTP(); 

$mail->Host = 'smtp.yandex.ru';

$mail->SMTPAuth = true;

$mail->Username = 'order@systemice.ru';
$mail->Password = '87v3948j3-';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;  
$mail->CharSet = "utf-8";



$mail->setFrom('order@systemice.ru', 'Проживание на мероприятии Выпускной Школы Продюсера Татьяны Маричевой');

$mail->addAddress('evgenij.baltais@yandex.ru');

$mail->isHTML(true);




function sendCurl($data,$ded_login,$ded_password ){
	if($curl = curl_init()){
	    curl_setopt($curl, CURLOPT_URL, 'https://' . $ded_login . ':' . $ded_password . '@crmvi.ru/corp/remotezakaz.php');
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
	    curl_setopt($curl, CURLOPT_POST, true);
	    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
	    $out = curl_exec($curl);
	    curl_close($curl);
	}
}


function sendCorpMail(){
	if (isset($_POST['name'])) {
		$name = $_POST['name'];
	}
	if (isset($_POST['phone'])) {
		$phone = $_POST['phone'];
	}
	if (isset($_POST['email'])) {
		$email = $_POST['email'];
	}
	if (isset($_POST['date'])) {
		$date = $_POST['date'];
	}
	if (isset($_POST['company'])) {
		$company = $_POST['company'];
	}
	if (isset($_POST['comment'])) {
		$comment = $_POST['comment'];
	}
	if (isset($_POST['guestsNumber'])) {
		$guestsNumber = $_POST['guestsNumber'];
	}
	if (isset($_POST['form_name_text'])) {
		$form_name_text = $_POST['form_name_text'];
	}

	if ($name == '') $name = '-';
	if ($phone == '') $phone = '-';
	if ($email == '') $email = '-';
	if ($comment == '') $comment = '-';
	if ($startDate == '') $startDate = '-';
	if ($endDate == '') $endDate = '-';

	$mail->Subject = 'Письмо с формы ' . $form_name_text;
	$mail->Body    = '<p style = "color: #000; font-size: 22px; line-height: 30px;">'. $form_name_text .'</p>';

	if (isset($_POST['name'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Имя: <span style = "font-weight: bold;">' . $_POST['name'] . '</span></p>';
	}
	if (isset($_POST['phone'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Телефон: <span style = "font-weight: bold;">' . $_POST['phone'] . '</span></p>';
	}
	if (isset($_POST['email'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Email: <span style = "font-weight: bold;">' . $_POST['email'] . '</span></p>';
	}
	if (isset($_POST['date'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">На дату: <span style = "font-weight: bold;">' . $_POST['date'] . '</span></p>';
	}
	if (isset($_POST['company'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Компания: <span style = "font-weight: bold;">' . $_POST['company'] . '</span></p>';
	}
	if (isset($_POST['guestsNumber'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Количество гостей: <span style = "font-weight: bold;">' . $_POST['guestsNumber'] . '</span></p>';
	}
	if (isset($_POST['men'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Мужчин: <span style = "font-weight: bold;">' . $_POST['men'] . '</span></p>';
	}
	if (isset($_POST['women'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Женщин: <span style = "font-weight: bold;">' . $_POST['women'] . '</span></p>';
	}
	if (isset($_POST['format'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Формат мероприятия: <span style = "font-weight: bold;">' . $_POST['format'] . '</span></p>';
	}
	if (isset($_POST['location'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Место проведения: <span style = "font-weight: bold;">' . $_POST['location'] . '</span></p>';
	}
	if (isset($_POST['link'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Ссылка: <span style = "font-weight: bold;">' . $_POST['link'] . '</span></p>';
	}
	if (isset($_POST['dateAdvance'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Дата предварительная? <span style = "font-weight: bold;">' . $_POST['dateAdvance'] . '</span></p>';
	}
	if (isset($_POST['comment'])) {
		$mail->Body    .= '<p style = "color: #000; font-size: 18px; line-height: 24px;">Комментарий: <span style = "font-weight: bold;">' . $_POST['comment'] . '</span></p>';
	}


	if(strlen($_FILES["file"]["name"])){

		$file_name = $_FILES['file']['name'];
		$file_ext=strtolower(end(explode('.', $file_name)));

		move_uploaded_file($_FILES['file']["tmp_name"], $_SERVER['DOCUMENT_ROOT'] . "/uploads/" . $file_name);
		$mail->addAttachment($_SERVER['DOCUMENT_ROOT'] . "/uploads/" . $file_name);
	}

	return $mail->send();
}


    if ($post['u'] == "70840598" || $post['email'] == "01215@gmail.com") {
        die();
    }

/*
	//----------- отправка в корп базу
	$dataCorp['clientname'] = $_POST['name'];
	$dataCorp['phone1'] = $_POST['phone'];
	$dataCorp['email'] = $_POST['email'];
	$dataCorp['date_in'] = date('d.m.Y', strtotime($_POST['date_st']));
	$dataCorp['date_out'] = date('d.m.Y', strtotime($_POST['date_end']));
	
	$dataCorp['hotel_comment'] = 'Systemice (systemice.ru)';
	$dataCorp['other_comments'] = $_POST['dopinfo'];
	$dataCorp['knight_id'] = $_POST['hotel'];
	
	$dataCorp['u'] = $_POST['u'];

	sendCurl($dataCorp,$ded_login,$ded_password );
	if(sendCorpMail($dataCorp)){
		$answer = ['status'=>'success'];		
	}
*/

/*
if($answer){
	echo json_encode($answer);die;
}else{
	echo 'Не переданы данные';die;
}
*/
*
echo sendCorpMail();