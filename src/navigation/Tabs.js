import * as React from "react";
import { Dimensions, Text, Image, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/TabScreens/HomeScreen";
import ServicesScreen from "../screens/TabScreens/ServicesScreen";
import ActivityScreen from "../screens/TabScreens/ActivityScreen";
import AccountScreen from "../screens/TabScreens/AccountScreen";

const WIDTH = Dimensions.get("window").width;
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  label: {
    fontSize: 10,
    color: "#9E9E9E",
    fontFamily: "Medium",
    textAlign: "center",
    marginTop: 2,
  },
});

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: "#fff",
          // Max Height...
          height: Platform.OS === "android" ? RFValue(82) : RFValue(82),
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F4F4F6",
          width: WIDTH,
          paddingHorizontal: RFValue(0),
          paddingTop: Platform.OS === "android" ? RFValue(5) : RFValue(0),
          paddingBottom: Platform.OS === "android" ? RFValue(15) : RFValue(20),
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "home") {
            if (focused) {
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: "#0C4DA2",
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/home.png")}
                  />
                  <Text
                    style={{
                      ...styles.label,
                      color: "#0C4DA2",
                      fontFamily: "Bold",
                    
                    }}
                  >
                    Home
                  </Text>
                </View>
              );
            } else
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/home.png")}
                  />
                  <Text style={{ ...styles.label }}>Home</Text>
                </View>
              );
          } else if (route.name === "service") {
            if (focused) {
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: "#0C4DA2",
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/services.png")}
                  />
                  <Text
                    style={{
                      ...styles.label,
                      color: "#0C4DA2",
                      fontFamily: "Bold",
                    }}
                  >
                    Services
                  </Text>
                </View>
              );
            } else
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/services.png")}
                  />
                  <Text style={{ ...styles.label }}>Services</Text>
                </View>
              );
          } else if (route.name === "activity") {
            if (focused) {
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: "#0C4DA2",
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/activity.png")}
                  />
                  <Text
                    style={{
                      ...styles.label,
                      color: "#0C4DA2",
                      fontFamily: "Bold",
                    }}
                  >
                    Activity
                  </Text>
                </View>
              );
            } else
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/activity.png")}
                  />
                  <Text style={{ ...styles.label }}>Activity</Text>
                </View>
              );
          } else if (route.name === "account") {
            if (focused) {
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: "#0C4DA2",
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/account.png")}
                  />

                  <Text
                    style={{
                      ...styles.label,
                      color: "#0C4DA2",
                      fontFamily: "Bold",
                    }}
                  >
                    Account
                  </Text>
                </View>
              );
            } else
              return (
                <View>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      alignSelf: "center",
                    }}
                    source={require("../assets/icons/TabIcons/account.png")}
                  />
                  <Text style={{ ...styles.label }}>Account</Text>
                </View>
              );
          }
        },

        headerShown: false,
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="service" component={ServicesScreen} />
      <Tab.Screen name="activity" component={ActivityScreen} />
      <Tab.Screen name="account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
