import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

LocaleConfig.defaultLocale = "en";

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <View style={styles.container}>

      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: "#0C4DA2",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                },
                text: {
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "SemiBold",
                },
              },
            },
          }}
          theme={{
            backgroundColor: "white",
            calendarBackground: "white",
            textSectionTitleColor: "#0C4DA2",
            selectedDayBackgroundColor: "#0C4DA2",
            selectedDayTextColor: "white",
            todayTextColor: "#0C4DA2",
            arrowColor: "#0C4DA2",
            monthTextColor: "#202020",
            textDayFontWeight: "600",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "600",
            textDayFontSize: 14,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    borderRadius: 24,
    marginTop: RFValue(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.41,
    elevation: 2,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0C4DA2",
  },
  calendarContainer: {},
});

export default CustomCalendar;
