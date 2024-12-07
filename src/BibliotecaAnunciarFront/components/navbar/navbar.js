import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 140,
    position: "absolute",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 4,
    resizeMode: "contain",
  },
  image: {
    width: "100%",
    /* height: '100%', */
    resizeMode: "contain",
  },
});
