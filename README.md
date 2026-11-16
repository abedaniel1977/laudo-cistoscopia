# Laudo de Cistoscopia

Aplicativo web para preencher laudos de cistoscopia no celular ou no computador.

## Recursos

- Ficha estruturada: identificação, indicação, procedimento, uretra, próstata e colo vesical, bexiga, lesões vesicais (com mapa da bexiga), meatos ureterais, conclusão e conduta.
- Botão "Preencher como exame normal" e sugestão automática de conclusão a partir dos achados alterados.
- Foto da ficha preenchida à mão: tirar foto pela câmera do celular ou escolher da galeria. As fotos saem anexadas no final do PDF.
- Gerar PDF, imprimir ou copiar o texto do laudo para o prontuário.
- Funciona sem internet depois do primeiro acesso e pode ser instalado na tela inicial do celular (PWA).

## Privacidade

Os laudos ficam salvos apenas no navegador do aparelho em que foram digitados (IndexedDB). Nenhum dado de paciente é enviado a servidor algum, nem a este repositório. Para levar os laudos a outro aparelho, use "Laudos" > "Backup (exportar)" e depois "Restaurar backup".

## Como usar

- Online: ative o GitHub Pages (Settings > Pages > Deploy from a branch > `main` / root) e abra o endereço gerado.
- Instalar no celular: abra o endereço no Chrome (Android) ou Safari (iPhone) e escolha "Adicionar à tela inicial".
- Localmente: abra `index.html` no navegador.

## Estrutura

- `index.html`: o app inteiro (HTML, CSS e JavaScript).
- `jspdf.umd.min.js`: biblioteca jsPDF 2.5.1 (licença MIT) para gerar o PDF.
- `sw.js` e `manifest.webmanifest`: funcionamento offline e instalação.
