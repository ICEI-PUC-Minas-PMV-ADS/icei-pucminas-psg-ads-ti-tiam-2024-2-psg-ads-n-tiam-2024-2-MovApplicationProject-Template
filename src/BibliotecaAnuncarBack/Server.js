const express = require('express');
const cors = require('cors'); 
const app = express();
const rotaLivro = require("./Routes/LivroRoutes");

app.use(cors()); 
app.use(express.json());

app.use('/livro', rotaLivro);

app.listen(3000, () => {
  console.log('Servidor Rodando na porta 3000');
});
