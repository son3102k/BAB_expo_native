import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
import { ProductDetails } from "./screens/ProductDetails.js";
import { Cart } from "./screens/Cart.js";
import { CartIcon } from "./components/CartIcon.js";
import { CartProvider } from "./CartContext.js";
import CheckoutForm from "./components/CheckoutForm.js";
import Login from "./screens/Login.js";
import HomeScreen from "./screens/HomeScreen.js";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => ({
              title: "",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "white",
              },
              headerTransparent: true,
            })}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "Home",
              headerTitleAlign: "left",
              headerTintColor: "white",
              headerTitleStyle: {
                color: "white",
              },
              headerTransparent: true,
            })}
          />
          <Stack.Screen
            name="Products"
            component={ProductsList}
            options={({ navigation }) => ({
              title: "Product List",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({ navigation }) => ({
              title: "Product details",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({ navigation }) => ({
              title: "My cart",
              headerTitleStyle: styles.headerTitle,
            })}
          />
          <Stack.Screen
            name="Information"
            component={CheckoutForm}
            options={({ navigation }) => ({
              title: "Card Number",
              headerTitleStyle: styles.headerTitle,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});
export default App;
