import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.link}>Go to about screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "#fff",
  },
  link: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  }
})