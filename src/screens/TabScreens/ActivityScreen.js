import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import ActivityMap from "../../components/Activity/ActivityMap";

import FlatListComponentActivityCard from "../../components/Activity/ActivityDeliveryCard";

const { width } = Dimensions.get("window");
export default function ActivityScreen() {
  return (
    <View style={styles.container}>
     <ScrollView
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{paddingBottom:50}}
     >
      <View style={styles.activityHeaderContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/logosmall.png")}
        />

        <Text style={styles.activityText}>Activity</Text>
      </View>

      <View style={styles.upCommingMainContainer}>
        <View style={styles.upcommingTextContainer}>
          <Text style={styles.upcominText}>Upcoming</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.upCommingDeliveyContainer}>
          <View style={styles.upCommingDeliveryLeftContainer}>
            <Text style={styles.noupcomingDeliveryText}>
              You have no upcoming delivery
            </Text>

            <View style={styles.sendYourPackageNow}>
              <Text style={styles.sendPAckageText}>Send your package now </Text>
              <Image
                style={styles.arrowright}
                source={require("../../assets/icons/Activity/arrow-right.png")}
              />
            </View>
          </View>

          <Image
            source={require("../../assets/icons/Activity/upcomming.png")}
            style={styles.packageIcon}
          />
        </View>
       
       <View>
        <View style={{...styles.upcommingTextContainer,marginTop:RFValue(20)}}>
          <Text style={styles.upcominText}>Past</Text>
          <TouchableOpacity>
           <Image 
           source={require('../../assets/icons/Activity/filter.png')}
           style={styles.filterIcon}
           />
          </TouchableOpacity>
        </View>
      <View style={styles.pastMapContainer}>
      <ActivityMap 
      borderRadius={16}
      height={RFValue(150)}
      />

      <Text style={styles.yourAddressText}>Your address{'\n'}Dubai mall</Text>
      
      <Text style={styles.dateTimeText}>Apr 14 │ 14:43 PM</Text>
      
      <Text style={styles.price}>AED 77.70</Text>
      </View>
        
        </View>
      </View>

      <View>
        <FlatListComponentActivityCard />
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
  activityHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFValue(20),
    marginTop: RFValue(54),
  },
  logo: {
    width: RFValue(28),
    height: RFValue(28),
    marginRight: RFValue(14),
  },
  activityText: {
    fontSize: RFValue(21),
    color: "#212121",
    fontFamily: "Bold",
  },
  upCommingMainContainer: {
    marginTop: RFValue(22),
  },
  upcommingTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(20),
  },
  upcominText: {
    color: "#212121",
    fontFamily: "Bold",
    fontSize: RFValue(17),
  },
  seeAllText: {
    fontSize: RFValue(14),
    color: "#0C4DA2",
    fontFamily: "Bold",
  },
  upCommingDeliveyContainer: {
    width: width - 45,
    height: 102,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10.84,
    
    elevation: 5,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 16,
    marginTop: RFValue(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(15),
  },
  noupcomingDeliveryText: {
    fontSize: RFValue(15),
    color: "#212121",
    fontFamily: "Bold",
  },
  sendPAckageText: {
    fontSize: RFValue(12),
    color: "#212121",
    fontFamily: "Medium",
  },
  sendYourPackageNow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  arrowright: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  packageIcon: {
    width: RFValue(45),
    height: RFValue(45),
    resizeMode: "contain",
  },
  filterIcon:
  {
    width:28,
    height:28,
  },
  pastMapContainer:
  {
    width: '90%',
    height:RFValue(290),
    padding:0,
    alignSelf: 'center',
    overflow:Platform.OS==='android'?'hidden':'visible',
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    
    elevation: 2,
    borderRadius:16,
    marginTop:RFValue(20)
    

    
  },
  yourAddressText:
  {
    fontSize:RFValue(21),
    color:'#212121',
    fontFamily:"Bold",
    paddingLeft:RFValue(14),
    paddingTop:RFValue(14),
    lineHeight:35,

  },
  dateTimeText:
  {
    fontSize:RFValue(14),
    fontFamily:"Medium",
    color:'#616161',
    marginLeft:RFValue(14),
    marginTop:8,
  },
  price:
  {
    fontSize:RFValue(14),
    color:'#616161',
    fontFamily:"Regular",
    marginTop:8,
    marginLeft:RFValue(14)

  }
});
