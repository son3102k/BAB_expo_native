import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Image,
  Alert,
  BackHandler,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserAvatar from "../components/UserAvatar";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("accessToken", value);
    } catch (e) {
      console.log(e);
    }
  };

  const onPressLogin = () => {
    axios
      .post("http://10.145.55.29:8080/auth/login", {
        login,
        password,
      })
      .then((res) => {
        storeData(res.data["accessToken"]);
        navigation.navigate("Home");
      })
      .catch((err) => {
        ToastAndroid.showWithGravity(
          "wrong username or password",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/login-background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logo}>
          <Image
            style={{
              width: 250,
              height: 50,
            }}
            source={require("../assets/OW_Logotype_RGB_99x28_s2.png")}
          />
          <UserAvatar color="white" style={styles.avatar} size={68} label="OP"/>
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="User name"
            placeholderTextColor="#808080"
            style={styles.textInput}
            onChangeText={setLogin}
            value={login}
            autoComplete="off"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#808080"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            autoComplete="off"
          />
        </View>
        <View style={styles.submitButton}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: 120,
              height: 40,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderColor: "#cccccc",
            }}
            onPress={onPressLogin}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  image: {
    height: "100%",
  },
  logo: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 9,
  },
  input: {
    flex: 3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  submitButton: {
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#808080",
    lineHeight: 30,
    height: 50,
    color: "white",
    width: "95%",
    fontSize: 18,
  },
  avatar: {
    opacity: 0.3, 
    backgroundColor: "white"
  }
});
