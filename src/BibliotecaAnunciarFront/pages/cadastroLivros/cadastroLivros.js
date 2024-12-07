import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import Footer from "../../components/footer/Footer";
import MenuDeAcoes from "../../components/menuAcoesAdmin/menuAcoesAdmin";
import Navbar from "../../components/navbar/navbar";
import { postLivros } from "../../Service/apiService";

export default function CadastroLivros() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [resumo, setResumo] = useState("");
  const [autor, setAutor] = useState("");

  const handleEnviar = async () => {
    if (!titulo || !categoria || !resumo || !autor) {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos!");
      return;
    }

    const livro = { titulo, categoria, resumo, autor, disponivel: "S" };

    try {
      console.log("Enviando dados para API:", livro);
      const { status } = await postLivros(livro);

      if (status === 200 || status === 201) {
        Alert.alert("Sucesso", "Livro cadastrado com sucesso!");
        setTitulo("");
        setCategoria("");
        setResumo("");
        setAutor("");
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar o livro.");
      }
    } catch (error) {
      console.error("Erro no handleEnviar:", error.message);
      Alert.alert("Erro", "Ocorreu um erro ao tentar cadastrar o livro.");
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.perfilHeader}>
          <Text style={styles.titulo}>Perfil</Text>
          <View style={styles.perfilContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.avatar}
            />
            <View style={styles.textoContainer}>
              <Text style={styles.nome}>Seu Nome</Text>
              <Text style={styles.email}>seuemail@email.com</Text>
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert("Editar", "Funcionalidade de edição!")}
            >
              <Text style={styles.editText}>editar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <MenuDeAcoes activeAction="addLivro" />

        <View style={styles.form}>
          <TextInput
            label="Titulo"
            value={titulo}
            onChangeText={(text) => setTitulo(text)}
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"
            theme={{ colors: { background: "#ffffff" } }}
            style={styles.input}
          />
          <View style={[styles.input, styles.pickerContainer]}>
            <Picker
              selectedValue={categoria}
              onValueChange={(itemValue) => setCategoria(itemValue)}
              style={styles.picker}
              dropdownIconColor="#000" 
            >
              <Picker.Item label="Selecione uma categoria" value="" />
              <Picker.Item label="Bíblia" value="biblia" />
              <Picker.Item label="Teologia" value="teologia" />
              <Picker.Item label="Jovens e Adolescentes" value="devocional" />
              <Picker.Item label="Estudo Bíblico" value="historia_da_igreja" />
              <Picker.Item
                label="Comentário Bíblico"
                value="comentario_biblico"
              />
            </Picker>
          </View>

          <TextInput
            label="Resumo"
            value={resumo}
            onChangeText={(text) => setResumo(text)}
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"
            theme={{ colors: { background: "#ffffff" } }}
            style={styles.input}
          />
          <TextInput
            label="Autor"
            value={autor}
            onChangeText={(text) => setAutor(text)}
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"
            theme={{ colors: { background: "#ffffff" } }}
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleEnviar}
            style={styles.button}
            labelStyle={{ color: "white" }}
          >
            Cadastrar Livro
          </Button>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 150,
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
  },
  button: {
    marginTop: 16,
    backgroundColor: "black",
    borderRadius: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    justifyContent: "center",
    height: 50,
  },
  picker: {
    color: "#000",
    backgroundColor: "transparent",
  },
});
