<?php

// $headers = getallheaders();
// $body = $_REQUEST;

// if ($headers == 1234) {


//   $val1 = (int)$_POST['val1'];
//   $val2 = (int)$_POST['val2'];
//   $contraseña = ($val1 + $val2);
//   $contraseñaJson = json_encode($contraseña);

//   echo ($contraseñaJson);
// }

print_r($_POST);
print_r(getallheaders()['token']);

// $val1 = (int)$_POST['val1'];
// $val2 = (int)$_POST['val2'];
// $headers = getallheaders();

// if ($headers != 1234) {

//   echo json_encode("Token incorrecta");
// } else {
//   echo json_encode($val1 + $val2);
// }