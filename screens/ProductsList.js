import React, { useEffect, useState, useCallback, useFocusEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  BackHandler,
  Alert,
} from "react-native";
import { Product } from "../components/Products.js";
import { getProducts } from "../services/ProductsServices.js";
export function ProductsList({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    setProducts(getProducts());
    navigation.addListener('beforeRemove', (e)=> {
      e.preventDefault();
      Alert.alert(
        'Warning!',
        'Are you want to logout?',
        [
          { text: "No", style: 'cancel', onPress: () => {} },
          {
            text: 'Yes',
            style: 'logout',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ]
      );
    });
  }, [navigation]);

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
