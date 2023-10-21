import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>
          A premium online store for
          <br /> sporter and their stylish choice
        </Text>
      </View>
      <View style={styles.grImage}>
        <Image source={require("../assets/bifour.png")} style={styles.image1} />
      </View>
      <Text style={styles.text2}>
        POWER BIKE <br />
        SHOP
      </Text>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.text3}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },

  text1: {
    fontSize: "26px",
    fontFamily: "VT323",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "41px",
  },
  text2: {
    fontSize: 30,
    fontFamily: "Ubuntu",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "10px",
  },
  image1: {
    width: "292px",
    height: "270px",
  },
  grImage: {
    backgroundColor: "#E941411A",
    width: "359px",
    height: "388px",
    borderRadius: "50px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  button1: {
    width: "340px",
    height: "61px",
    borderRadius: "30px",
    backgroundColor: "#E94141",
    marginTop: 30,
  },
  text3: {
    fontSize: "27px",
    fontFamily: "VT323",
    textAlign: "center",
    fontWeight: "400",
    color: "white",
    marginTop: 13,
  },
});
