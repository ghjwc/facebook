<?php

$host = "localhost";
$user = "root";
$db = "facebook";

$conn = mysqli_connect($host, $user, null, $db);

$no = $_GET['no'];
$cancel = $_GET['cancel'];

$sql = "update fbboard set
        likeCount = likeCount + $cancel
        where no = $no";

$result = $conn -> query($sql);

$sql_count = "select
                likeCount
                from fbboard
                where no = $no";

$result_count = $conn -> query($sql_count);
$data = mysqli_fetch_assoc($result_count);
$countValue = $data['likeCount'];

if($data) {
    // 중복
    echo json_encode(array('result' => $countValue));
} else {
    // 중복이 아님
    echo json_encode(array('result' => 'n'));
}

?>