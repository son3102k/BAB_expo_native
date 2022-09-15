import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
  
const UserAvatar = ({size, label , style , color}) => {
    return (
        <View style={styles.container}>
            <Avatar.Text size={size} label={label} style={style} color={color}/>
        </View>
    );
};
  
export default UserAvatar;
  
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 30,
    },
    text: {
        marginBottom: 20,
        fontSize: 30,
    },
});