import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import HeaderBack from "../../components/HeaderBack";
import SelectableButtons from "../../components/SelectableButtons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import SeeAllAdress from "../../components/SeeAllAdress";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", title: "Dubai Mall ", desc: "Dubai, Uttar, pradech, India" },
  { id: "2", title: "Dubai Marina ", desc: "Dubai, Uttar, pradech, India" },
  { id: "3", title: "Dubai Mall ", desc: "Dubai, Uttar, pradech, India" },
  { id: "4", title: "Dubai Mall ", desc: "Dubai, Uttar, pradech, India" },
  { id: "5", title: "Dubai Mall ", desc: "Dubai, Uttar, pradech, India" },
  { id: "6", title: "Dubai Mall ", desc: "Dubai, Uttar, pradech, India" },
];

export default function PlanYourDeliveryScreen() {
  const [selectedButton, setSelectedButton] = useState("sameDay");
  const [address, setAdress] = useState("");
  const handleButtonPress = (value) => {
    setSelectedButton(value);
  };

  return (
    <View style={styles.container}>
      <HeaderBack title="Plan your delivery" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <SelectableButtons
            selectedButton={selectedButton}
            handleButtonPress={handleButtonPress}
          />
        </View>

        <View style={styles.addressToDestinationContainer}>
          <Image
            style={styles.stepIndicator}
            source={require("../../assets/icons/PlanyourJourney/steps.png")}
          />

          <View>
            <View style={styles.addressinputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Your Address"
                value={address}
                onChangeText={setAdress}
              />
            </View>

            <View
              style={{
                ...styles.addressinputContainer,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.toAdresstext}>Dubai Mall</Text>
              <TouchableOpacity>
                <Image
                  style={styles.plusIcon}
                  source={require("../../assets/icons/PlanyourJourney/plus.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.savedPlacesMainContainer}
        >
          <View style={styles.savedplaceLeftContainer}>
            <AntDesign name="star" size={24} color="#F0C419" />
            <Text style={styles.savedPlacesText}>Saved places</Text>
          </View>

          <Entypo name="chevron-thin-right" size={24} color="#0C4DA2" />
        </TouchableOpacity>

        <View style={styles.seprator} />

        <View>
          <FlatList
          contentContainerStyle={{marginTop:RFValue(20)}}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <SeeAllAdress title={item.title} desc={item.desc} index={index} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  stepIndicator: {
    width: RFValue(33),
    height: RFValue(78),
    resizeMode: "contain",
    marginRight: RFValue(14),
  },

  addressinputContainer: {
    width: width / 1.4,
    height: 39,
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    alignSelf: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 17,
  },
  input: {
    flex: 1,
    fontSize: RFValue(12),
    color: "#9E9E9E",
  },
  plusIcon: {
    width: 20,
    height: 20,
  },
  addressToDestinationContainer: {
    flexDirection: "row",
    marginLeft: RFValue(20),
    marginTop: RFValue(20),
  },
  savedplaceLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  savedPlacesText: {
    fontSize: RFValue(18),
    color: "#212121",
    fontFamily: "SemiBold",
    marginLeft: 12,
  },
  savedPlacesMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: RFValue(8),
  },
  seprator: {
    width: width,
    height: 8,
    backgroundColor: "#f5f5f5",
    marginTop: RFValue(21),
  },
  listseparator: {
    height: 1,
    backgroundColor: "#eeeeee",
    width: width - 45,
    alignSelf: "center",
    marginBottom: 20,
  },
});
