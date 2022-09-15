import { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  BackHandler,
  Alert,
  StyleSheet,
  ImageBackground,
} from "react-native";
import UserAvatar from "../components/UserAvatar";

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
          style={{ height: "85%" }}
        >
          <View style={styles.topAvatar}>
            <View style={styles.avatarText}>
                <UserAvatar style={styles.avatar} size={60} label="S" />
                <Text style={{
                    color: "white",
                    opacity: 0.8,
                    fontSize: 16,
                    height: 30,
                    marginLeft: 20,
                    textAlign: "center",
                }}>Welcome Son!</Text>
            </View>
          </View>
          <View style={styles.topHandle}>
            <View style={styles.account}>

            </View>
            <View style={styles.payment}>

            </View>
            <View style={styles.qrcode}>

            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}></View>
      <View style={styles.footer}></View>
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
    flex: 5,
  },
  footer: {
    flex: 1,
  },
  topAvatar: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  topHandle: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 12,
    width: "90%",
    flex: 4,
    flexDirection: "row",
  },
  avatar: {
    opacity: 0.5,
    backgroundColor: "white",
  },
  avatarText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  account: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#f2f2f2"
  },
  payment: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#f2f2f2"
  },
  qrcode: {
    flex: 1,
  }
});
