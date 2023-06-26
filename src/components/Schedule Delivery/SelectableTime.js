import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const SelectableTime = (props) => {
  const [selectedButton, setSelectedButton] = useState("1");

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const timeData = [
    { id: "1", time: "09:00 AM" },
    { id: "2", time: "10:00 AM" },
    { id: "3", time: "11:00 AM" },
    { id: "4", time: "12:01 PM" },
    { id: "5", time: "12:02 PM" },
    // Add more time slots as needed
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === item.id && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress(item.id)}
      >
        <Text
          style={[
            styles.buttonText,
            selectedButton === item.id && styles.selectedButtonText,
          ]}
        >
          {item.time}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={timeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(18),
    marginLeft: RFValue(19),
  },
  button: {
    width: RFValue(90),
    height: 38,
    borderWidth: 2,
    borderColor: "#0C4DA2",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: RFValue(10),
  },
  buttonText: {
    color: "#101010",
    fontSize: RFValue(13),
    fontFamily: "SemiBold",
  },
  selectedButton: {
    backgroundColor: "#0C4DA2",
    borderWidth: 0,
  },
  selectedButtonText: {
    color: "white",
    fontSize: RFValue(13),
    fontFamily: "SemiBold",
  },
});

export default SelectableTime;
