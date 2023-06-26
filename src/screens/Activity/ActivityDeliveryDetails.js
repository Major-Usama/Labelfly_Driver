import { StyleSheet, Text, View,Dimensions,Image,TextInput,TouchableOpacity, ScrollView } from "react-native";
import React,{useState} from "react";
import HeaderBack from "../../components/HeaderBack";
import ActivityMap from "../../components/Activity/ActivityMap";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";
const { width } = Dimensions.get("window");


 function Button(props) {
    return (
      <TouchableOpacity onPress={props.onPress} style={{...styles.buttonContainer,backgroundColor:props.bcolor}}>
        <Text style={{...styles.btnText,color:props.tcolor}}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
  

  
export default function ActivityDeliveryDetails() {
    const [address, setAdress] = useState("Your address");
  return (
    <View style={styles.container}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:100}}
    >
      <HeaderBack title="Delivery details" />

      <View style={{ marginTop: RFValue(24) }}>
        <ActivityMap borderRadius={0} height={RFValue(160)} />
      </View>

      <Text style={styles.dateTimeText}>14/03/2023, 12:54 AM</Text>

      <View style={styles.pricePackageContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>AED 77.70</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Small Package</Text>
        </View>
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
                editable={false}
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
             
            </View>
          </View>
        </View>

        <View style={styles.activityDriverNameContainer}>

        <View style={styles.activityDriverNameleft}>
        
        <Image 
        style={styles.activityProfile}
        source={require('../../assets/icons/Activity/activityprofile.png')}
        />

        <View style={{marginLeft:20}}>
            <Text style={styles.driverNameText}>Driver Name</Text>
         <View style={styles.ratingMainContainer}>
        <View style={styles.halfStarContainer}>
            <Image
            style={styles.halfStarImage}
            source={require('../../assets/icons/Activity/halfstar.png')}
            />

        <Text style={styles.ratingsText}>4.8</Text>
        </View>

        <View style={{...styles.halfStarContainer,marginLeft:14}}>
        <Text style={styles.ratingsText}>︱</Text>
        <Image
            style={{...styles.halfStarImage,
            marginLeft:10,marginRight:0,
            }}
            source={require('../../assets/icons/Activity/smallbike.png')}
            />
        </View>
        </View>
        </View>

        </View>
        
        <View style={styles.activityDriverNameRightContainer}>

        <TouchableOpacity> 
        <Image 
        style={{...styles.chatIcon,marginRight:20}}
        source={require('../../assets/icons/Activity/chatactivity.png')}
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image 
        style={styles.chatIcon}
        source={require('../../assets/icons/Activity/callActivity.png')}
        />
        </TouchableOpacity>
        </View>
        

        </View>

        <View
        style={styles.seprator}
        />
  </ScrollView>
        {/* <View style={styles.footerButtonContainer}>
         
         <Button
         title="Cancel Delivery"
         bcolor="#EB4335"
         tcolor="#ffffff"
         />

        <Button
         title="Cancel Delivery"
         bcolor="#E7E7E7"
         tcolor="#35383F"
         />

        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dateTimeText: {
    color: "#212121",
    fontFamily: "Bold",
    fontSize: RFValue(20),
    marginTop: RFValue(50),
    marginLeft: RFValue(20),
  },
  priceContainer: {
    height: 31,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: "rgba(16, 16, 16, 0.08)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginRight: 20,
  },
  priceText: {
    color: "#35383F",
    fontFamily: "SemiBold",
    fontSize: RFValue(14),
  },
  pricePackageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFValue(20),
    marginTop: RFValue(4),
  },
  stepIndicator: {
    width: RFValue(33),
    height: RFValue(78),
    resizeMode: "contain",
    marginRight: RFValue(14),
  },

  addressinputContainer: {
    width: width / 1.32,
    height: 39,
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    alignSelf: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: RFValue(13),
    color: "#212121",
    fontFamily:'SemiBold'
  },
  plusIcon: {
    width: 20,
    height: 20,
  },
  addressToDestinationContainer: {
    flexDirection: "row",
    marginLeft: RFValue(20),
    marginTop: RFValue(16),
  },
  toAdresstext:
  {
    color:'#212121',
    fontFamily:'SemiBold',
    fontSize: RFValue(13),
  },
  activityProfile:
  {
    width:RFValue(50),
    height:RFValue(50),
  },
  driverNameText:
  {
    color:'#212121',
    fontFamily:"Bold",
    fontSize:RFValue(16),
    marginBottom:8,
  },
  halfStarContainer:
  {
flexDirection:"row",
alignItems:"center"
  },
  halfStarImage:
  {
    width:20,
    height:20,
    resizeMode:'contain',
    marginRight:RFValue(7)

  },
  ratingsText:
  {
    color:'#424242',
    fontSize:RFValue(12),
    fontFamily:'Medium'
  },

  ratingMainContainer:
  {

    flexDirection:'row',
    alignItems:"center",
  },
  activityDriverNameleft:
  {
    flexDirection:'row',
    alignItems:"center",
  },
  activityDriverNameRightContainer:
  {
    flexDirection:"row",
    alignContent:'center',
  },
  chatIcon:
  {
    width:28,
    height:28,
    // marginRight:20,
    resizeMode:"contain"
  },
  activityDriverNameContainer:
  {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    paddingHorizontal:20,
    marginTop:RFValue(5),
  },
  seprator:
  {
    width:width,
    height:8,
    backgroundColor:'#F5F5F5',
    marginTop:RFValue(20),

  },
  buttonContainer: {
    width: width - 48,
    height: RFValue(52),
    backgroundColor: "#0C4DA2",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom:20,
  },
  btnText: {
    fontSize: RFValue(14),
    fontFamily: "Bold",
    color: "#fff",
  },
  footerButtonContainer:
  {
    position:"absolute",
    right:0,
    left:0,
    zIndex:9999,
    bottom:Platform.OS==='android'?RFValue(0):RFValue(10)


  }
});
