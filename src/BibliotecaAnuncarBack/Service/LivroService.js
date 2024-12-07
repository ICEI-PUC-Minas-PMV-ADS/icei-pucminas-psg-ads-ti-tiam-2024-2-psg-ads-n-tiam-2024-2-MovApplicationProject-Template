const {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} = require("firebase/firestore");
const { db } = require("../FirebaseConnection");

async function getAllLivro() {
  try {
    const livrosArray = [];
    const livros = await getDocs(collection(db, "Livros"));
    if (livros) {
      livros.forEach((livro) => {
        livrosArray.push({ id: livro.id, ...livro.data() });
      });
      return livrosArray;
    } else {
      throw new Error("Lista de livros não encontrada");
    }
  } catch (error) {
    throw error;
  }
}

async function getLivroId(id) {
  try {
    const livroRef = doc(db, "Livros", id);
    const livro = await getDoc(livroRef);
    if (livro.exists()) {
      return { id: livro.id, ...livro.data() };
    } else {
      throw new Error("Livro não encontrado");
    }
  } catch (error) {
    throw error;
  }
}

async function addLivro(novoLivro) {
  try {
    if (novoLivro) {
      const livroRef = await addDoc(collection(db, "Livros"), novoLivro);
      const livro = await getDoc(livroRef);
      return { id: livro.id, ...livro.data() };
    }
  } catch (error) {
    throw error;
  }
}

async function editLivro(livroId, dadosAtualizados) {
  try {
    if (livroId && dadosAtualizados) {
      const livroRef = doc(db, "Livros", livroId);
      await updateDoc(livroRef, dadosAtualizados);

      const livroAtualizado = await getDoc(livroRef);
      return { id: livroAtualizado.id, ...livroAtualizado.data() };
    } else {
      throw new Error("ID do livro ou dados atualizados não fornecidos.");
    }
  } catch (error) {
    throw new Error(`Erro ao editar o livro: ${error.message}`);
  }
}

async function deleteLivroById(id){
  try {
    const livroRef = doc(db, "Livros", id);
    await deleteDoc(livroRef);
    return { message: `Livro com ID ${id} foi deletado com sucesso` };
  } catch (error) {
    throw new Error(`Erro ao deletar o livro: ${error.message}`);
  }
}

module.exports = {
  getAllLivro,
  getLivroId,
  addLivro,
  deleteLivroById,
  editLivro
};
