const {
  addLivro,
  getAllLivro,
  getLivroId,
  deleteLivroById,
  editLivro,
} = require("../Service/LivroService");
const { Livro } = require("../Models/Livro");
const schedule = require("node-schedule");

async function getLivros(req, res) {
  try {
    let livros = [];
    livros = await getAllLivro();
    if (livros) {
      res.send(livros);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

async function getLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = await getLivroId(id);
    if (livro) {
      res.send(livro);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

async function postLivros(req, res) {
  try {
    const livro = req.body;
    const livroAdc = await addLivro(livro);
    console.log(livroAdc, "teste");
    res.status(201);
    res.send(livroAdc);
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}
async function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    const resultado = await deleteLivroById(id);
    res.status(200).send(resultado);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function putLivro(req, res) {
  try {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    const resultado = await editLivro(id, dadosAtualizados);
    if (!resultado) {
      return res.status(404).send({ error: "Livro não encontrado." });
    }
    console.log("test");
    res
      .status(200)
      .send({ message: "Livro atualizado com sucesso!!", livro: resultado });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function reservarLivro(req, res) {
  try {
    const id = req.params.id;
    const dadosAtualizados = { disponivel: "N" };
    const resultado = await editLivro(id, dadosAtualizados);

    if (!resultado) {
      return res.status(404).send({ error: "Livro não encontrado." });
    }
    schedule.scheduleJob(
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      async () => {
        //schedule.scheduleJob(new Date(Date.now() + 10 * 1000) teste para 10 segundos
        try {
          await editLivro(id, { disponivel: "S" });
        } catch (error) {
          console.error(
            `Erro ao reverter disponibilidade do livro ${id}:`,
            error.message
          );
        }
      }
    );

    res
      .status(200)
      .send({ message: "Livro reservado com sucesso!", livro: resultado });
  } catch (error) {
    console.error("Erro na função reservarLivro:", error.message);
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivros,
  putLivro,
  deleteLivro,
  reservarLivro,
};
