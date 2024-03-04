<?php
// Check if nombre and email are set in the POST data
if(isset($_POST["nombre"], $_POST["email"])) {
    // Extract nombre and email from the POST data
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    echo $nombre;
    echo $email;
    echo var_dump($nombre);
    //Datos de conexión
    $servidor = "localhost";
    $db = 'examensegundo'; // Change this to the correct database name
    $usuario = 'root';    
    $pass = '';

    try {
        // Create a new PDO connection
        $conexion = new PDO('mysql:host='.$servidor.';dbname='. $db, $usuario, $pass);
        // Set error mode to exceptions
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Your SQL query and execution here...
        // For example:
        $sql = 'INSERT INTO user(nombre, email) VALUES (:nombre, :email)';
        $query = $conexion->prepare($sql);
        $query->bindParam(':nombre', $nombre);
        $query->bindParam(':email', $email);
        $query->execute();

        // Respond with success message
        echo json_encode(array("success" => true, "message" => "Data inserted successfully."));
    } catch (PDOException $error) {
        // Respond with error message
        echo json_encode(array("success" => false, "message" => "Error: " . $error->getMessage()));
    } finally {
        // Close the connection
        $conexion = null;
    }
} else {
    // Respond with error message if nombre or email is not set
    echo json_encode(array("success" => false, "message" => "Error: Nombre or email not provided."));
}
?>
