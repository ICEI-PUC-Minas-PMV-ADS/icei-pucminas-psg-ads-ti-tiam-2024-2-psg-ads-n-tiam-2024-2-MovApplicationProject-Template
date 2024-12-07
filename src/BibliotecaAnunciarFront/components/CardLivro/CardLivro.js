import { Image, StyleSheet, Text, View } from "react-native";

export default function CardLivro({ image, title, update }) {
     return (
          <View style={styles.card}>
               <View style={styles.viewImage}>
                    <Image source={require("../../assets/logo.png")} style={styles.image} />
               </View>
               <View style={styles.viewText}>
                    <Text style={styles.boldText}>{title}</Text>
                    <Text>{update} </Text>
               </View>
          </View>
     )
}
const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },
     card: {
          width: 300,
          height: 250
     },
     image: {
          width: 250,
          height: 200,
          borderRadius: 15

     },
     boldText: {
          fontWeight: "bold",
          fontSize: 20
     },
});