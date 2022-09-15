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
  BackHandler
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('accessToken', value);
    } catch (e) {
      console.log(e);
    }
  }

  const onPressLogin = () => {
    axios.post("http://10.145.55.43:8080/auth/login",{
      login,
      password
    })
    .then((res)=> {
      storeData(res.data["accessToken"]);
      navigation.navigate("Products");
    })
    .catch((err)=> {
      ToastAndroid.showWithGravity(
        'wrong username or password',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    })
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/login-background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logo}>
        <Image
          style={{
            width: 250,
            height: 50,
          }}
          source={require('../assets/OW_Logotype_RGB_99x28_s2.png')}/>
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="User name"
            placeholderTextColor="#fff"
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
            placeholderTextColor="#fff"
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
              borderColor: "#009999",
              backgroundColor: "#009999"
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
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
  },
  input: {
    flex: 3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  submitButton: {
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#009999",
    lineHeight: 30,
    height: 50,
    color: "white",
    width: "90%",
    fontSize: 18,
  },
});
