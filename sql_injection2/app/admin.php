<?php
session_start();

$pdo = \PDO::connect('pgsql:host=db;port=5432;dbname=sqlidb', 'postgres', 'MySuperStrongPassword');
$msg = htmlspecialchars($_GET['msg'] ?? '');
$form = '';

if (($_SESSION['user'] ?? null) === 'admin') {
    $msg = "Well played, you win!";
} else {
    $form = '<form method="POST" action="/admin.php">
        <label for="username-input">Username: </label>
        <input id="username-input" type="text" name="username" />
        <label for="password-input">Password: </label>
        <input id="password-input" type="password" name="password" />
        <button type="submit">Submit</button>
    </form>';
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $stmt = $pdo->query('SELECT * FROM users WHERE username = \'' . $_POST['username'] . '\' AND password = \'' . $_POST['password'] . '\';', PDO::FETCH_ASSOC);
        $results = $stmt->fetchAll();
        $username = ($results[0] ?? [])['username'] ?? null;
        if (!is_null($username)) {
            $_SESSION['user'] = $username;
            header('Location: /admin.php', 302);
        } else {
            header('Location: /admin.php?msg=Invalid%20credentials', 302);
        }
    }
} else if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo "<!DOCTYPE html>
<html>
    <head></head>
    <body>
        $msg
        $form
    </body>
</html>
";
}
?>
