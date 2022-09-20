import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function CardServices() {
    return (
        <View style={{backgroundColor: "#e6e6e6", height: '100%'}}>

        
        <View style={styles.container}>
            <View style={{height: '20%'}}></View>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeaderText}>
                    <Text style={{fontSize: 20}}>Credit Card</Text>
                </View>
                <View style={styles.listCard}>
                    <Text style={{}}>You don have any Credit card.</Text>
                    <Text style={{color: "blue", textDecorationLine: "underline"}}>Open now to claim more promote!</Text>
                </View>
                <View style={styles.addNewcard}>
                    <View style={{borderBottomWidth: 2, borderBottomColor: "#f2f2f2", flex: 1}}/>
                        <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flex: 2 }}>
                            <View style={{flexDirection: "column",width: 60,justifyContent: "center", alignItems: "center",
                            height: 40 , backgroundColor: "#f2f2f2", borderRadius: 4}}>
                                <Entypo name="plus" size={32} color="#0099ff" />
                            </View>
                        <Text style={{color: "#0099ff", width: "40%", marginLeft: 9}}>Open new card</Text>
                        </TouchableOpacity>
                    
                </View>
            </View>
            <View style={styles.cardContainer}>
            <View style={styles.cardHeaderText}>
                    <Text style={{fontSize: 20}}>Debit Card</Text>
                </View>
                <View style={styles.listCard}>
                    {/* <Text style={{}}>You don have any Credit card.</Text>
                    <Text style={{color: "blue", textDecorationLine: "underline"}}>Open now to claim more promote!</Text> */}
                    <TouchableOpacity style={styles.cardItemContainer}>
                        <View style={styles.IssuingIconContainer}>
                            <FontAwesome name="cc-visa" size={30} color="#0066ff"/>
                        </View>
                        <View style={styles.IssuingDetails}>
                            <Text style={{color: "#006bb3"}}>Visa Mastercard</Text>
                            <Text style={{}}>970415******1452</Text> 
                            <Text style={{color: "#b3b3b3", fontSize: 12}}>Available balance: 30000</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <FontAwesome name="angle-right" size={18} color="black" style={{alignSelf: "flex-end"}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.addNewcard}>
                    <View style={{borderBottomWidth: 2, borderBottomColor: "#f2f2f2", flex: 1}}/>
                        <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flex: 2 }}>
                            <View style={{flexDirection: "column",width: 60,justifyContent: "center", alignItems: "center",
                            height: 40 , backgroundColor: "#f2f2f2", borderRadius: 4}}>
                                <Entypo name="plus" size={32} color="#0099ff" />
                            </View>
                        <Text style={{color: "#0099ff", width: "40%", marginLeft: 9}}>Open new card</Text>
                        </TouchableOpacity>
                    
                </View>
            </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '75%',
        flexDirection: "column",
    },
    cardContainer: {
        padding: 20,
        paddingBottom: 10,
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: "column",

    },
    cardHeaderText: {
        flex: 1,
    },
    listCard: {
        marginTop: 15,
        flex: 2,
    },
    addNewcard: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    cardItemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    IssuingIconContainer: {
        height: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    IssuingDetails: {
        height: '100%',
        flex: 5,
    }
});