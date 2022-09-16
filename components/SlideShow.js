import { FlatList, StyleSheet, SafeAreaView, Image, View } from "react-native";

const Data = [
  require("../assets/slide4.jpg"),
  require("../assets/slide3.jpg"),
  require("../assets/slide1.jpg"),
  require("../assets/slide2.jpg"),
];

export default function SlideShow() {
  return (
    <SafeAreaView style={{ height: "100%", margin: 10 }}>
      <FlatList
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: 250,
              borderRadius: 8,
              height: 150,
              resizeMode: "contain",
              marginLeft: 6,
            }}
          />
        )}
        data={Data}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
