import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen3 from "./screen3";

const array = [
  {
    id: 1,
    imgae: require("../assets/bifour.png"),
    price: "1800",
    name: "Pinarello",
  },
  {
    id: 2,
    imgae: require("../assets/bithree.png"),
    price: "1500",
    name: "Pina Bike",
  },
  {
    id: 3,
    imgae: require("../assets/bithree.png"),
    price: "2700",
    name: "Pinarello",
  },
  {
    id: 4,
    imgae: require("../assets/bione.png"),
    price: "1700",
    name: "Pina Mountai",
  },
  {
    id: 5,
    imgae: require("../assets/bitwo.png"),
    price: "1900",
    name: "Pinarello",
  },
  {
    id: 6,
    imgae: require("../assets/bione.png"),
    price: "1350",
    name: "Pinarello",
  },
];

export default function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>The world’s Best Bike</Text>
      </View>
      <View style={styles.gr1}>
        <Pressable style={styles.button1}>
          <Text style={styles.text2}>All</Text>
        </Pressable>
        <Pressable style={styles.button1}>
          <Text style={styles.text3}>Roadbike</Text>
        </Pressable>
        <Pressable style={styles.button1}>
          <Text style={styles.text3}>Mountain</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={array}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={styles.gr2}>
                <Pressable onPress={() => navigation.navigate("Screen3", item)}>
                  <Image
                    source={item.imgae}
                    style={styles.image1}
                    resizeMode="contain"
                  />
                  <Text style={styles.text4}>{item.name}</Text>
                  <Text style={styles.text5}>$ {item.price}</Text>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  text1: {
    fontSize: "25px",
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    color: "#E94141",
    marginLeft: 20,
    marginTop: 50,
  },
  button1: {
    borderRadius: "5px",
    width: "99px",
    height: "32px",
    border: "1px solid #E9414187",
  },
  text2: {
    fontSize: "20px",
    fontFamily: "Voltaire",
    fontWeight: "400",
    color: "#E94141",
    textAlign: "center",
    marginTop: 3,
  },
  text3: {
    fontSize: "20px",
    fontFamily: "Voltaire",
    fontWeight: "400",
    color: "#BEB6B6",
    textAlign: "center",
    marginTop: 3,
  },
  gr1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  image1: {
    height: "80px",
    width: "80px",
  },
  gr2: {
    width: "160px",
    height: "160px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7BA8326",
    marginTop: "15px",
    marginLeft: "25px",
    borderRadius: "20px",
  },
  text4: {
    fontFamily: "Voltaire",
    fontSize: "20px",
    fontWeight: 400,
    color: "#00000099",
  },
  text5: {
    fontFamily: "Voltaire",
    fontSize: "20px",
    fontWeight: 400,
  },
});
