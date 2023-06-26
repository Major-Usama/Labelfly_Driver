import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import HeaderBack from "../../components/HeaderBack";
import { RFValue } from "react-native-responsive-fontsize";
import CustomTextInput from "../../components/CustomTextInput";
import CustomIconInput from "../../components/CustomIconInput";
import CustomNotesInput from "../../components/CustomNotesInput";
import Button from "../../components/Button";

const { width } = Dimensions.get("window");
export default function SchedulePickupScreen({ navigation }) {
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <HeaderBack title={"Schedule a pickup"} />
      <Text style={styles.fillinfoText}>
        Please fill the receiver Information below
      </Text>

      <View style={styles.seprator} />

      <KeyboardAvoidingView
        style={styles.flexContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : RFValue(-90)}
      >
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.inputsContainer}>
            <CustomIconInput
              placeholder="Full Name"
              icon={require("../../assets/icons/PlanyourJourney/fullname.png")}
              value={fullname}
              onChangeText={setFullName}
            />

            <CustomIconInput
              placeholder="Additional Address Details"
              icon={require("../../assets/icons/PlanyourJourney/additionaladdress.png")}
              value={address}
              onChangeText={setAddress}
            />

            <CustomNotesInput
              multiline={true}
              placeholder="Notes"
              icon={require("../../assets/icons/PlanyourJourney/eidt.png")}
              value={notes}
              onChangeText={setNotes}
            />

            <CustomIconInput
              keyboardType="phone-pad"
              placeholder="Contact Number"
              icon={require("../../assets/icons/PlanyourJourney/contact.png")}
              value={contact}
              onChangeText={setContact}
            />
          </View>
        </ScrollView>
        <View style={styles.footerButtonContainer}>
          <Button
            onPress={() => navigation.navigate("ChoosePaymentMethodScreen")}
            title="Continue"
          />
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
  flexContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
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
  },
  inputsContainer: {
    marginTop: RFValue(22),
  },
  footerButtonContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? RFValue(30) : RFValue(30),
    left: 0,
    right: 0,
    paddingHorizontal: RFValue(20),
  },
});
