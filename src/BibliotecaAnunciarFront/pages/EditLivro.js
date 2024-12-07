import React, { useState, useEffect } from "react";
import {Alert,ScrollView,StyleSheet,View,} from "react-native";
import { Button, TextInput } from "react-native-paper";
import Navbar from "../components/navbar/navbar";
import api from '../../BibliotecaAnunciarFront/Service/apiAxios';
import { useNavigation } from "@react-navigation/native";

export default function EditLivro({ route }) {
  const navigation = useNavigation();

  const { livroId, titulo, autor, resumo, categoria } = route.params;

  const [tituloEdit, setTitulo] = useState(titulo);
  const [categoriaEdit, setCategoria] = useState(categoria);
  const [resumoEdit, setResumo] = useState(resumo);
  const [autorEdit, setAutor] = useState(autor);

  const handleEditar = async () => {
    if (!tituloEdit || !categoriaEdit || !resumoEdit || !autorEdit) {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos!");
      return;
    }
    try {
     const livroAtualizado = {
          titulo: tituloEdit,
          categoria: categoriaEdit,
          resumo: resumoEdit,
          autor: autorEdit,
        };
      
      const response = await api.put(`/livro/${livroId}`, livroAtualizado);
      navigation.navigate("Home")

      console.log(response)

    } catch (error) {
      console.error("Erro no handleEditar:", error.message);
      Alert.alert("Erro", "Ocorreu um erro ao tentar atualizar o livro.");
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <TextInput
            label="Titulo"
            value={tituloEdit}
            onChangeText={(text) => setTitulo(text)}
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"
            theme={{
              colors: {
                background: "#ffffff",
                placeholder: "#000000", // Definindo a cor do texto como preta
              },
            }}
            style={styles.input}
          />
          <TextInput
            label="Categoria"
            value={categoriaEdit}
            onChangeText={(text) => setCategoria(text)}
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"
            theme={{
              colors: {
                background: "#ffffff",
                placeholder: "#000000", // Definindo a cor do texto como preta
              },
            }}
            style={styles.input}
          />
          <TextInput
            label="Resumo"
            value={resumoEdit}
            onChangeText={(text) => setResumo(text)}
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"
            theme={{
              colors: {
                background: "#ffffff",
                placeholder: "#000000", 
              },
            }}
            style={styles.input}
          />
          <TextInput
            label="Autor"
            value={autorEdit}
            onChangeText={(text) => setAutor(text)}
            mode="outlined"
            aoutlineColor="#000000"
            activeOutlineColor="#000000"
            theme={{
              colors: {
                background: "#ffffff",
                placeholder: "#000000", 
              },
            }}
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleEditar}
            style={styles.button}
            labelStyle={{ color: "white" }}
          >
            Atualizar Livro
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 250,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  perfilHeader: {
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    margin: 12,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  perfilContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  editText: {
    color: "white",
    backgroundColor: "black",
    padding: 5,
    borderRadius: 8,
  },
  form: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 8,
    margin: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  input: {
    marginBottom: 16,
    color: "black",
  },
  button: {
    marginTop: 16,
    backgroundColor: "black",
    borderRadius: 10,
  },
});
