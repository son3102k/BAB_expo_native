import { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  BackHandler,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import UserAvatar from "../components/UserAvatar";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SlideShow from "../components/SlideShow";

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert("Warning!", "Are you want to exit App?", [
        { text: "No", style: "cancel", onPress: () => {} },
        {
          text: "Yes",
          style: "logout",
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground
          source={require("../assets/topbackground.jpg")}
          resizeMode="cover"
          style={{ height: "88%" }}
        >
          <View style={styles.topAvatar}>
            <View style={styles.avatarText}>
              <UserAvatar style={styles.avatar} size={60} label="S" />
              <Text
                style={{
                  color: "white",
                  opacity: 0.8,
                  fontSize: 16,
                  height: 30,
                  marginLeft: 20,
                  textAlign: "center",
                }}
              >
                Welcome Son!
              </Text>
            </View>
          </View>
          <View style={styles.topHandle}>
            <TouchableOpacity style={styles.account}>
              <View style={styles.topHandleIcon}>
                <FontAwesome name="bank" size={24} color="black" />
              </View>
              <View style={styles.topHandleText}>
                <Text style={styles.topHandleTextStyle}>Bank</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.payment}>
              <View style={styles.topHandleIcon}>
                <FontAwesome name="credit-card" size={24} color="black" />
              </View>
              <View style={styles.topHandleText}>
                <Text style={styles.topHandleTextStyle}>Services</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrcode}>
              <View style={styles.topHandleIcon}>
                <FontAwesome name="qrcode" size={24} color="black" />
              </View>
              <View style={styles.topHandleText}>
                <Text style={styles.topHandleTextStyle}>Qrcode</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyRow1}>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem} onPress={()=> navigation.navigate("Products")}>
              <FontAwesome name="shopping-cart" size={24} color="orange" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>Buy</Text>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem}>
              <FontAwesome5 name="receipt" size={24} color="#0099ff" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>Bill</Text>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem}>
              <FontAwesome name="money" size={24} color="#00e600" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>Loan</Text>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem}>
              <FontAwesome5 name="piggy-bank" size={24} color="gold" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>Saving</Text>
          </View>
        </View>
        <View style={styles.bodyRow2}>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem}>
              <SimpleLineIcons name="screen-smartphone" size={30} color="#009999" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>Mobile topup</Text>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem}>
              <MaterialCommunityIcons name="credit-card-plus-outline" size={24} color="red" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>Open new card</Text>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem}>
              <Ionicons name="airplane-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>Plane ticket</Text>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity style={styles.touchableItem}>
              <Feather name="more-horizontal" size={18} color="black" />
            </TouchableOpacity>
            <Text style={styles.touchableItemText}>More</Text>
          </View>
        </View>
        <View style={styles.bodySlider}>
          <SlideShow />
        </View>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
  },
  top: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  body: {
    flexDirection: "column",
    flex: 5,
  },
  bodyRow1: {
    flex: 1,
    flexDirection: "row",
  },
  bodyRow2: {
    flex: 1,
    flexDirection: "row",
  },
  bodySlider: {
    flex: 2,
  },
  rowItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  touchableItem: {
    width: 60,
    height: 60,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
  },
  touchableItemText: {
    marginTop: 3,
    fontSize: 12,
  },
  footer: {
    flex: 1,
  },
  topAvatar: {
    flex: 14,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  topHandle: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 12,
    width: "90%",
    flex: 5,
    flexDirection: "row",
  },
  avatar: {
    opacity: 0.5,
    backgroundColor: "white",
  },
  avatarText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  account: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#f2f2f2",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  payment: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#f2f2f2",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  qrcode: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topHandleIcon: {
    padding: 2,
  },
  topHandleText: {
    marginTop: 3,
  },
  topHandleTextStyle: {
    fontSize: 11,
  },
});
