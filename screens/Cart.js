import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../CartContext";
import { MaterialIcons } from "@expo/vector-icons";

export function Cart({ navigation }) {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });

    return (
      <View>
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Totals</Text>
          <Text style={styles.lineRight}>₽ {total}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Information")}
        >
          <View style={styles.checkoutIcon}>
            <MaterialIcons name="payment" size={20} color="black" />
          </View>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>{item.product.name}</Text>
        <Text style={styles.qty}>x {item.qty}</Text>
        <Text style={styles.lineRight}>₽ {item.totalPrice}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}
const styles = StyleSheet.create({
  qty: {
    flex: 1,
    lineHeight: 40,
    textAlign: "right",
  },
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    flex: 6,
    flexDirection: "row",
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 3,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  checkoutButton: {
    marginTop: 10,
    width: "50%",
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 30,
    alignSelf: "center",
  },
  checkoutText: {
    fontSize: 16,
    alignSelf: "center",
  },
  checkoutIcon: {
    textAlign: "center",
    alignSelf: "center",
  },
});
