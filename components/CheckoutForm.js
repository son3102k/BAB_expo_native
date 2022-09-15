import { useContext, useState } from "react";
import axios from "axios";
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { CartContext } from "../CartContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function CheckoutForm({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const payment = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem("accessToken");
      if (value !== null) {
        axios
          .post(
            "http://10.145.55.29:8080/acqPurchase",
            {
              amount: getTotalPrice(),
              contractIdentifier: cardNumber,
            },
            {
              headers: {
                authorization: `Bearer ${value}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data["acqPurchaseResult"]["value"]);
            setIsLoading(false);
            if (res.data["acqPurchaseResult"]["value"]["retCode"] === 0) {
              alert("Successfully Payment");
              clearCart();
              navigation.navigate("Products");
            } else {
              ToastAndroid.showWithGravity(
                "Payment Decline",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
            }
          })
          .catch((err) => {
            setIsLoading(false);
            ToastAndroid.showWithGravity(
              "Payment decline",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
          });
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      ToastAndroid.showWithGravity(
        "Payment Decline",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };

  const [cardNumber, setCardNumber] = useState("");
  const { items, getItemsCount, getTotalPrice, clearCart } =
    useContext(CartContext);
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <View style={styles.input}>
          <TextInput onChangeText={setCardNumber} value={cardNumber} placeholder="fill out your card number" style={{padding: 16}} placeholderTextColor="#000"/>
        </View>
      </View>
      <View style={styles.button}>
        <View style={styles.touchableOpacity}>
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 5,
              borderRadius: 30,
            }}
            onPress={() => {
              payment();
            }}
          >
            <Text
              style={{
                fontSize: 16,
                alignSelf: "center",
              }}
            >
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.activityIndicator}>
        {isLoading && <ActivityIndicator size="large" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  textInput: {
    flex: 2,
    flexDirection: "row",
    width: "90%",
    alignItems: "flex-end",
  },
  button: {
    width: "30%",
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  activityIndicator: {
    flex: 6,
  },
  input: {
    borderColor: "orange",
    borderRadius: 30,
    flex: 1,
    height: 50,
    borderWidth: 1,
  },
  touchableOpacity: {
    flex: 1,
  }
});
