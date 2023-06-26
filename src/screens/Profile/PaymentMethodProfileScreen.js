import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Button from "../../components/Button";
import HeaderPaymentMethod from "../../components/Profile/HeaderPaymentMethod";

const { width } = Dimensions.get("window");

const PaymentMethodContainer = ({ name, selected, onPress, icon }) => {
  return (
    <TouchableOpacity style={[styles.paymentMethodContainer]} onPress={onPress}>
      <View style={styles.leftContainer}>
        {/* Payment Method Icon */}
        <Image style={styles.paymentIcon} source={icon} />

        {/* Payment Method Name */}
        <Text style={styles.name}>{name}</Text>
      </View>

      <Text style={styles.connectedText}>Connected</Text>
    </TouchableOpacity>
  );
};
export default function PaymentMethodProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderPaymentMethod title={"Payment method"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, marginTop: 24 }}
      >
        <PaymentMethodContainer
          icon={require("../../assets/icons/PlanyourJourney/paypal.png")}
          name="PayPal"
        />

        <PaymentMethodContainer
          icon={require("../../assets/icons/PlanyourJourney/goole.png")}
          name="Google Pay"
        />

        <PaymentMethodContainer
          icon={require("../../assets/icons/PlanyourJourney/apple.png")}
          name="Apple Pay"
        />

        <PaymentMethodContainer
          icon={require("../../assets/icons/PlanyourJourney/card.png")}
          name="•••• •••• •••• •••• 5269"
        />
      </ScrollView>
      <View style={styles.footerButtonContainer}>
        <Button
          onPress={() => navigation.navigate("AddnewCardScreen")}
          title="Add new card"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fillinfoText: {
    color: "#424242",
    fontFamily: "Medium",
    fontSize: RFValue(14),
    marginTop: RFValue(20),
    marginLeft: RFValue(20),
  },
  seprator: {
    width: width,
    height: 8,
    marginTop: RFValue(20),
    backgroundColor: "#F5F5F5",
    marginBottom: RFValue(20),
  },
  paymentMethodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    height: 80,
    borderRadius: 16,
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: RFValue(20),
    paddingHorizontal: 16,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 12,
    fontSize: RFValue(16),
    color: "#212121",
    fontFamily: "Bold",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0C4DA2",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    width: "90%",
    height: 58,
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "#E2EEFD",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonLabel: {
    fontSize: RFValue(14),
    color: "#0C4DA2",
    fontFamily: "Bold",
  },
  paymentIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  footerButtonContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? RFValue(30) : RFValue(30),
    left: 0,
    right: 0,
    paddingHorizontal: RFValue(20),
  },
  connectedText: {
    fontSize: RFValue(13),
    fontFamily: "Bold",
    color: "#101010",
  },
});
