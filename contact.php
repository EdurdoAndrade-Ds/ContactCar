<?php
// Configurar as informações do contato
$nome = "Ricardo Araujo";
$telefone = "+55 11 97617-7611";
$email = "ricardo.arj.santos@gmail.com";

// Cabeçalhos para forçar o download
header('Content-Type: text/vcard; charset=utf-8');
header('Content-Disposition: attachment; filename="ricardo_araujo.vcf"');

// Criar o conteúdo do vCard
echo "BEGIN:VCARD\n";
echo "VERSION:3.0\n";
echo "FN:$nome\n";
echo "N:Araujo;Ricardo;;;\n";
echo "TEL;TYPE=CELL:$telefone\n";
echo "EMAIL;TYPE=INTERNET:$email\n";
echo "END:VCARD\n";
exit;
?>
