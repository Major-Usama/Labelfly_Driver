import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "1",
    image: require("../../assets/icons/Activity/bike.png"),
    title: "Unnamed Road",
    dateTime: "Apr . 12:53 AM",
    price: "AED 77.70",
  },
  {
    id: "2",
    image: require("../../assets/icons/Activity/bike.png"),
    title: "Unnamed Road",
    dateTime: "Apr . 12:53 AM",
    price: "AED 77.70",
  },
  {
    id: "3",
    image: require("../../assets/icons/Activity/bike.png"),
    title: "Unnamed Road",
    dateTime: "Apr . 12:53 AM",
    price: "AED 77.70",
  },
  // Add more items as needed
];

const ActivityDeliveryCard = ({ item }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('ActivityDeliveryDetails')}
      activeOpacity={0.5}
      style={styles.activityDeliveryContainer}
    >
      <View style={styles.activityCardLeftContainer}>
        <Image style={styles.activityIcon} source={item.image} />

        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.dateTime}>{item.dateTime}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      <FontAwesome name="angle-right" size={24} color="black" />
    </TouchableOpacity>
  );
};

const FlatListComponentActivityCard = () => {

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ActivityDeliveryCard item={item} />}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  activityDeliveryContainer: {
    width: "90%",
    height: RFValue(100),
    padding: 0,
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 16,
    marginBottom: RFValue(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  activityIcon: {
    width: RFValue(65),
    height: RFValue(55),
    resizeMode: "contain",
    marginRight: 16,
  },
  title: {
    color: "#212121",
    fontSize: RFValue(16),
    fontFamily: "Bold",
  },
  dateTime: {
    fontSize: RFValue(13),
    color: "#616161",
    fontFamily: "Medium",
    marginTop: 8,
  },
  price: {
    fontSize: RFValue(13),
    color: "#616161",
    fontFamily: "Medium",
    marginTop: 8,
  },
  activityCardLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FlatListComponentActivityCard;
