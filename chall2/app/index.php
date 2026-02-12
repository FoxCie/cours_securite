<?php

$msg = htmlspecialchars($_GET['msg'] ?? '');
$form = '';

?>

<ul >
<li><a href="/?file=lorem.txt">Lorem ipsum</a></li>
<li><a href="/?file=lfi.txt">LFI</a></li>
</ul>

<?php

if (isset($_GET['file'])) {
    echo '<p><pre>' . file_get_contents($_GET['file']) . '</pre></p>';
}
?>
