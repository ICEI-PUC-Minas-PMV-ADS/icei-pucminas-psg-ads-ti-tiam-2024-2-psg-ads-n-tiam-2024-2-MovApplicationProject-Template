import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home-outline" size={30} color="black" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="list-outline" size={30} color="black" />
        <Text style={styles.iconText}>Lista</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BookRegistration")}>
        <Icon name="person-outline" size={30} color="black" />
        <Text style={styles.iconText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Icon name="person-outline" size={30} color="black" />
        <Text style={styles.iconText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Singup")}>
        <Icon name="person-outline" size={30} color="black" />
        <Text style={styles.iconText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    backgroundColor: "#E9E9E9",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    color: "black",
    marginTop: 5,
  },
});
