<?php
$token = "5710780834:AAFLC6INTIg0cOAa2_S-FHZygEnOsowm110";
$chat_id = "-870157003";

if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);

    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

    else {
        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
    }
}
?>