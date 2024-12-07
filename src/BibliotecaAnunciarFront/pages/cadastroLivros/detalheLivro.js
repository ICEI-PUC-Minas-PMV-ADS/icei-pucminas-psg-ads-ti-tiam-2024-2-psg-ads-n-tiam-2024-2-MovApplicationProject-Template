import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import Navbar from "../../components/navbar/navbar";
import api from '../../Service/apiAxios';

export default function DetalheLivro() {

    const navigation = useNavigation();
    const route = useRoute();
    const { livroId, titulo, autor, resumo, categoria, disponivel } = route.params;
    const [isDisabled, setIsDisabled] = useState(disponivel !== "S");

    useEffect(() => {
        setIsDisabled(disponivel !== "S");
      }, [disponivel]);
      
      async function reservarLivro(livroId) {
        try {
          await api.put(`/livro/${livroId}/reservar`, { disponivel: "N" });
          Alert.alert("Sucesso", "Livro reservado com sucesso!");
          setIsDisabled(true); 
        } catch (error) {
          console.error("Erro ao reservar o livro:", error.response?.data || error.message);
          Alert.alert("Erro", "Não foi possível reservar o livro.");
        }
      }
      
    

    async function deleteLivro(livroId) {
        try {
          const response = await api.delete(`/livro/${livroId}`);
          navigation.navigate("Home");
          console.log('Livro deletado com sucesso:', response.data);

        } catch (error) {
          console.error('Erro ao deletar o livro:', error.response || error.message);
        }
    }

    
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.detalhe__Container}>
                <View style={styles.contentContainer}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>

                        {/* fazer icon de voltar*/}
                        
                        <Text style={styles.detalhe__TituloLivro}>Título: {titulo}</Text>

                        <View style={styles.containerDeleteEditButton }>
                            <Button 
                                style={styles.buttonFunctions}
                                onPress={() => navigation.navigate("editPage", {livroId, titulo, autor, resumo, categoria })}
                            ><Icon  name="pencil-outline" size={30} color="black" /></Button>
                            <Button
                                style={styles.buttonFunctions}
                                onPress={() => deleteLivro(livroId)}
                            ><Icon name="trash-outline" size={30} color="black" /></Button>
                        </View>

                        {/* imagem*/}

                        <Text style={styles.detalhe__Autor}>
                            <Text style={styles.boldText}>Autor: </Text>{autor}
                        </Text>
                        <Text style={styles.detalhe__Descricao} >
                            <Text style={styles.boldText}>Descrição: </Text>{categoria}
                        </Text>

                        <Text style={styles.detalhe__StatusDisponivel}>{disponivel === "S" ? "Disponível para empréstimo" : "NÃO disponível para empréstimo"}</Text>
                        <Button
                            style={[
                                styles.detalhe__BotaoReservar,
                                isDisabled && styles.detalhe__BotaoReservarDesabilitado,
                            ]}
                            mode="contained"
                            labelStyle={{ color: isDisabled ? "gray" : "white" }}
                            disabled={isDisabled}
                            onPress={() => reservarLivro(livroId)} 
                        >
                            Reservar
                        </Button>
                        <Text style={styles.detalhe__Resumo}>Resumo: {resumo}</Text>

                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 140,
    },
    detalhe__Container: {
        marginTop: 10,
        marginBottom: 10,
        padding: 15
    },
    contentContainer: {
        flexGrow: 1,
        padding: 15,
    },
    scrollViewContent: {
        paddingBottom: 80,
    },
    detalhe__TituloLivro: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#131313",
        marginTop: 20,
        marginBottom: 15,
    },
    detalhe__Autor: {
        fontSize: 18,
        color: "#131313",
        marginBottom: 10,
    },
    detalhe__Descricao: {
        fontSize: 18,
        color: "#131313",
        marginBottom: 10,
    },
    detalhe__Resumo: {
        fontSize: 18,
        color: "#131313",
        marginTop: 20,
        marginBottom: 15,
    },
    detalhe__StatusDisponivel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#980204",
        marginBottom: 20,
    },
    boldText: {
        fontWeight: "bold",
    },

    detalhe__BotaoReservar: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#007BFF",
        backgroundColor: "#006C69",
        marginBottom: 20,
    },
    detalhe__BotaoReservarDesabilitado: {
        backgroundColor: "#b0b0b0",
        borderColor: "#b0b0b0",
    },
    containerDeleteEditButton : {
        flex: 1,
        flexDirection: "row",
        justifyContent: "end"
    },
    buttonFunctions:{
        width: "50px",
        height: "50px",
        justifyContent: "center"
    },
});
