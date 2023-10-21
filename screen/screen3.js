import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Screen3({ navigation, route }) {
  return (
    <View>
      <View style={styles.grImage}>
        <Image style={styles.image} source={route.params.imgae} />
      </View>
      <Text style={styles.text1}>{route.params.name}</Text>
      <Text style={styles.text2}>15% OFF I 350$</Text>
      <Text style={styles.text3}>Description</Text>
      <Text style={styles.text4}>
        It is a very important form of writing as
        <br />
        we write almost everything in
        <br />
        paragraphs, be it an answer, essay, story,
        <br />
        emails, etc.
      </Text>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Pressable
          onPress={() => navigation.navigate("Screen1")}
          style={styles.buton}
        >
          <Text style={styles.text5}>Add to card</Text>
        </Pressable>
      </View>
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
  image: {
    width: "310px",
    height: "340px",
  },
  grImage: {
    width: "350px",
    height: "380px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E941411A",
    marginLeft: "17px",
    marginTop: "8px",
  },
  text1: {
    fontFamily: "Voltaire",
    fontSize: "35px",
    fontWeight: 400,
    marginLeft: 10,
  },
  text2: {
    fontFamily: "Voltaire",
    fontSize: "25px",
    fontWeight: 400,
    color: "#00000096",
    marginLeft: 15,
  },
  text3: {
    fontFamily: "Voltaire",
    fontSize: "25px",
    fontWeight: 400,
    marginLeft: 15,
    marginTop: 10,
  },
  text4: {
    fontFamily: "Voltaire",
    fontSize: "22px",
    fontWeight: 400,
    marginLeft: 15,
    color: "#00000091",
    marginTop: 10,
  },
  text5: {
    fontFamily: "Voltaire",
    fontSize: "25px",
    textAlign: "center",
    marginLeft: 15,
    color: "white",
    marginTop: 10,
  },
  buton: {
    backgroundColor: "#E94141",
    width: "269px",
    height: "54px",
    borderRadius: "30px",
  },
});
