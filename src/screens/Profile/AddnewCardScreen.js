import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/HeaderBack";
import { RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get("window").width;

import CardNumberInput from "../../components/Profile/CardNumberInput";
import CustomCardInput from "../../components/Profile/CustomCardinput";
import ExpiryDatePicker from "../../components/Profile/ExpiryDatePicker";
import Button from "../../components/Button";

const DebitCard = ({ name, cardNumber, cvv, selectedDate }) => {
  return (
    <ImageBackground
      source={require("../../assets/icons/Profile/debitcard.png")}
      style={styles.debitCardContainer}
    >
      <View style={styles.cardFront}>
        <View style={styles.cardLogoContainer}>
          {/* Add your card logo here */}

          <Text style={styles.cardLogoText}>Name</Text>
        </View>
        <View style={styles.cardNumberContainer}>
          {cardNumber === "" ? (
            <Text style={{ ...styles.cardNumberText, fontSize: 45 }}>
              •••• •••• •••• ••••
            </Text>
          ) : (
            <Text style={styles.cardNumberText}>{cardNumber}</Text>
          )}
        </View>

        <View style={styles.cardHolderDateContainer}>
          <View style={{ ...styles.cardExpiryContainer, marginRight: 40 }}>
            <Text style={styles.cardExpiryText}>Card Holder name</Text>

            {name === "" ? (
              <Text
                style={{ ...styles.cardExpiryText, marginTop: 5, fontSize: 13 }}
              >
                ••••• ••••
              </Text>
            ) : (
              <Text
                style={{ ...styles.cardExpiryText, marginTop: 5, fontSize: 12 }}
              >
                {name}
              </Text>
            )}
          </View>

          <View style={styles.cardExpiryContainer}>
            <Text style={styles.cardExpiryText}>Expiry date</Text>
            {selectedDate === "" ? (
              <Text
                style={{ ...styles.cardExpiryText, marginTop: 5, fontSize: 13 }}
              >
                ••••/••••
              </Text>
            ) : (
              <Text
                style={{ ...styles.cardExpiryText, marginTop: 5, fontSize: 13 }}
              >
                {selectedDate}
              </Text>
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default function AddNewCardScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("2572 4338 7827 5285");
  const [cvv, setCVV] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleCancel = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (date) => {
    setDatePickerVisibility(false);

    const formattedDate = date.toLocaleString("default", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });

    setSelectedDate(formattedDate.replace(/\//g, "/"));
  };

  const handleCardNumberChange = (value) => {
    let formattedValue = value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedValue);
  };

  return (
    <View style={styles.container}>
      <HeaderBack title="Add New Card" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : RFValue(-90)}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Debit Card */}
          <DebitCard
            name={name}
            cardNumber={cardNumber}
            cvv={cvv}
            selectedDate={selectedDate}
          />

          {/* Inputs */}
          <View style={styles.inputsContainer}>
            <View>
              <Text style={styles.inputTitle}>Card Name</Text>
              <CustomCardInput
                value={name}
                onChangeText={setName}
                placeholder="Card Name"
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Card Number</Text>
              <CardNumberInput
                value={cardNumber}
                onChangeText={handleCardNumberChange}
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </View>
            <View style={styles.expiryCvvContainer}>
              <View>
                <Text style={{ ...styles.inputTitle, marginLeft: 0 }}>
                  Expiry Date
                </Text>
                <ExpiryDatePicker
                  isDatePickerVisible={isDatePickerVisible}
                  setDatePickerVisibility={setDatePickerVisibility}
                  handleCancel={handleCancel}
                  handleConfirm={handleConfirm}
                  selectedDate={selectedDate}
                  setSelectedDate={selectedDate}
                  showDatePicker={showDatePicker}
                />
              </View>
              <View>
                <Text style={{ ...styles.inputTitle, marginLeft: 0 }}>CVV</Text>
                <TextInput
                  style={styles.cvvInput}
                  placeholder="CVV"
                  keyboardType="number-pad"
                  maxLength={3}
                  value={cvv}
                  onChangeText={(text) => setCVV(text)}
                  returnKeyType="done"
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerButtonContainer}>
          <Button onPress={() => navigation.navigate("tabs")} title="Add" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputsContainer: {
    marginTop: 24,
  },
  inputTitle: {
    fontSize: RFValue(15),
    color: "#212121",
    fontFamily: "Bold",
    marginLeft: 22,
    marginBottom: 12,
  },
  cvvInput: {
    width: WIDTH / 2.4,
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 9,
    fontSize: RFValue(12),
    fontFamily: "SemiBold",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 20,
    borderColor: "#B3D2F9",
    backgroundColor: "#FAFAFA",
  },
  expiryCvvContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginTop: 5,
  },
  debitCardContainer: {
    alignSelf: "center",
    width: WIDTH - 40,
    height: RFValue(190),
    borderRadius: 24,
    resizeMode: "contain",
    marginTop: 20,
    overflow: "hidden",
  },
  cardFront: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  cardLogoContainer: {
    alignSelf: "flex-start",
  },
  cardLogoText: {
    color: "#fff",
    fontSize: RFValue(14),
    fontFamily: "Bold",
  },
  cardNumberContainer: {
    // alignItems: "center",
  },
  cardNumberText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "SemiBold",
    letterSpacing: 2,
  },
  cardHolderContainer: {},
  cardHolderText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "SemiBold",
    textTransform: "uppercase",
  },
  cardExpiryContainer: {},
  cardExpiryText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "SemiBold",
  },
  cardCVVText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "SemiBold",
  },
  cardBack: {
    flex: 1,
    backgroundColor: "#000",
    borderRadius: 12,
  },
  cardHolderDateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerButtonContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? RFValue(30) : RFValue(30),
    left: 0,
    right: 0,
    paddingHorizontal: RFValue(20),
  },
});
