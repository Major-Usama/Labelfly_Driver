import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const BoxItem = ({ icon, title, backgroundColor, textColor }) => {
  return (
    <View style={[styles.boxContainer, { backgroundColor }]}>
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </View>
  );
};

const WelcomeBox = () => {
  const boxItems = [
    {
      id: 1,
      icon: require("../assets/icons/tracking.png"),
      title: `Real Time${"\n"}Tracking`,
      backgroundColor: "#0C4DA2",
      textColor: "#fff",
    },
    {
      id: 2,
      icon: require("../assets/icons/payment.png"),
      title: `Multiple${"\n"}Payment methods`,
      backgroundColor: "#ffffff",
      textColor: "#000",
    },
    {
      id: 3,
      icon: require("../assets/icons/tracking.png"),
      title: `Real Time${"\n"}Tracking`,
      backgroundColor: "#FF5733",
      textColor: "#fff",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={boxItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: RFValue(19) }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BoxItem
            icon={item.icon}
            title={item.title}
            backgroundColor={item.backgroundColor}
            textColor={item.textColor}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFValue(20),
  },
  boxContainer: {
    width: RFValue(185),
    height: RFValue(167),
    borderRadius: 16,
    paddingLeft: RFValue(14),
    paddingTop: RFValue(14),
    marginRight: RFValue(20),
    paddingBottom: RFValue(15),
    justifyContent: "space-between",
  },
  icon: {
    width: RFValue(28),
    height: RFValue(28),
    resizeMode:"contain"
  },
  title: {
    fontSize: RFValue(25),
    fontFamily: "Medium",
  },
});

export default WelcomeBox;
