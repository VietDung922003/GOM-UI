import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

export default function SplashScreen() {
  const router = useRouter();
  const [loaded] = useFonts({
    Italianno: require("../assets/fonts/Italianno-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>GOM</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          <Text style={styles.memoryText}>Memory</Text>
          {"\n"}
          <Text style={styles.bookText}>Book</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/cameraView")}
      >
        <Text style={styles.buttonText}>Nhấn để vào</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1AFFF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingBottom: 50,
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  logo: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Italianno",
    transform: [{ rotate: "-10deg" }],
    letterSpacing: 2,
    alignItems: "flex-start",
    textAlign: "left",
  },
  memoryText: {
    fontSize: 128,
    lineHeight: 150,
  },
  bookText: {
    fontSize: 96,
    lineHeight: 50,
    marginLeft: -10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
});
