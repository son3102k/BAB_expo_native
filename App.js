import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Account from "./screens/Account.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: "",
          tabBarLabel: "",
          tabBarIcon: ()=>(<AntDesign name="home" size={32} color="#737373" style={{
            width: 32,
          }}/>),
          tabBarStyle: {
            height: 65,
            position: 'absolute',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            
          },
          tabBarButton: props => <TouchableOpacity {...props}/>,
          tabBarLabelPosition: "beside-icon",
          
        })}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: "",
          tabBarLabel: "",
          tabBarIcon: ()=>(<MaterialIcons name="account-circle" size={32} color="#737373" style={{
            width: 32,
          }}/>),
          tabBarStyle: {
            height: 65,
            position: 'absolute',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            
          },
          tabBarButton: props => <TouchableOpacity {...props}/>,
          tabBarLabelPosition: "beside-icon",
          
        })}
      />
    </Tab.Navigator>
  );
};
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
            component={HomeTab}
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
