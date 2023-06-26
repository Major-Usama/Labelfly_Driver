import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import HomeDropoffInput from "../../components/HomeDropoffInput";
import { RFValue } from "react-native-responsive-fontsize";
import RecentItem from "../../components/RecentItem";
import DisplayContainer from "../../components/DisplayContainer";
import PromotionCard from "../../components/PromotionCard";
import DiscountList from "../../components/DiscountList";

import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HomeDropoffInput />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.recentMainContainer}>
          <View style={styles.recentContainer}>
            <Text style={styles.recentText}>Recent</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('PlanYourDeliveryScreen')}>
              <Text style={styles.sellallText}>See All</Text>
            </TouchableOpacity>
          </View>

          <RecentItem
            title="Dubai Mall"
            desc="Bahraich, Uttar, pradech, India"
          />
          <RecentItem
            title="Dubai Mahasi "
            desc="Bahraich, Uttar, pradech, India"
          />
        </View>

        <View style={styles.seprator} />

        <DisplayContainer />

        <PromotionCard
          image={require("../../assets/images/promotion.jpg")}
          width={width - 40}
          height={RFValue(170)}
        />
        <DiscountList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  recentMainContainer: {
    marginTop: RFValue(20),
  },
  recentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(20),
    marginBottom: RFValue(20),
  },
  recentText: {
    fontSize: RFValue(18),
    fontFamily: "Bold",
    color: "#212121",
  },
  sellallText: {
    fontSize: RFValue(14),
    fontFamily: "Bold",
    color: "#0C4DA2",
  },
  seprator: {
    width: width,
    height: 8,
    backgroundColor: "#f5f5f5",
  },
});
