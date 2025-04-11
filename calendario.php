<?php

include 'conecta_db.php';

if (
    isset($_POST['titulo_evento']) &&
    isset($_POST['data_evento']) &&
    isset($_POST['horario_evento']) &&
    isset($_POST['data_prazo']) &&
    isset($_POST['hora_prazo']) &&
    isset($_POST['descricao'])
) {
    $oMysql = conecta_db();

    $titulo = $_POST['titulo_evento'];
    $datai = $_POST['data_evento'];
    $horai = $_POST['horario_evento'];
    $datat = $_POST['data_prazo'];
    $horat = $_POST['hora_prazo'];
    $descricao = $_POST['descricao'];

    $query = "INSERT INTO tb_evento (titulo_evento, data_evento, horario_evento, data_prazo, hora_prazo, descricao)
              VALUES ('$titulo', '$datai', '$horai', '$datat', '$horat', '$descricao')";

    $resultado = $oMysql->query($query);

}

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Calendário</title>
  <link rel="stylesheet" href="calendario.css">
</head>
<body>
  <div class="calendar-container">
    <div class="calendar-header">
      <button id="prev">&#8592;</button>
      <h2 id="month-year"></h2>
      <button id="next">&#8594;</button>
    </div>
    <div class="calendar-days">
      <div>DOM</div><div>SEG</div><div>TER</div><div>QUA</div>
      <div>QUI</div><div>SEX</div><div>SÁB</div>
    </div>
    <div class="calendar-dates" id="calendar-dates"></div>
    <div class="botao-add">
    <button id="openModal" class="add-event-btn">Adicionar Evento</button>
  </div>
  </div>

  <!-- Botão para abrir o modal -->


<!-- Modal -->
<div id="modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Adicionar Evento</h2>

    <div class="modal-form">
      <form class="modal-form" method="POST">

        <label>Título</label>
        <input name="titulo_evento" type="text" placeholder="Título do evento">

        <label>Data de início</label>
        <input name="data_evento" type="date">
        <input name="horario_evento" type="time">

        <label>Data de término</label>
        <input name="data_prazo" type="date">
        <input name="hora_prazo" type="time">

        <label>Descrição</label>
        <textarea name="descricao" placeholder="Escreva uma descrição..."></textarea>

        <button type="submit" class="save-event">Salvar</button>

      </form>
    </div>
  </div>
</div>

  <script src="calendario.js"></script>
</body>
</html>
