const { doc, setDoc, getDoc } = require("firebase/firestore");

const addDocument = async (collection, docId, data) => {
  try {
    await setDoc(doc(db, collection, docId), data);
    console.log("Documento adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar documento:", error);
  }
};

const getDocument = async (collection, docId) => {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Documento não encontrado!");
    return null;
  }
};

module.exports = { addDocument, getDocument };