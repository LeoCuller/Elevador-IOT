const express = require('express');
const app = express();
const port = 6767;

app.use(express.json());

app.use(express.static('public'));


app.post('/sensores', (req, res) => {
  const { presenca, obstrucao } = req.body;

  console.log(`Sensor de presença: ${presenca}`);
  console.log(`Sensor de obstrução: ${obstrucao}`);

  // como funciona:
  // Se presença == 0 (ninguém), mantém porta aberta
  // Se obstrução == 1 (obstruída), não fecha a porta
  // Se presença == 1 (alguém) E obstrução == 0 (livre), fecha a porta
  
  let portaAberta;
  
  if (presenca === 0) {
    portaAberta = 1;
  } else if (obstrucao === 1) {
    portaAberta = 1;
  } else {
    portaAberta = 0;
  }

  if (portaAberta === 1) {
    console.log("Porta Aberta\n");
  } else {
    console.log("Porta Fechada\n");
  }

  res.json({ portaAberta });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor IoT rodando em http://localhost:${port}`);
});
