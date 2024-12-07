import api from "./apiAxios";

export async function postLivros(livro) {
  try {
    console.log("Enviando dados:", livro);
    const response = await api.post("/livro", livro);
    console.log("Resposta do servidor:", response.data);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(
      "Erro ao enviar dados:",
      error.response?.data || error.message
    );
    throw error;
  }
}


