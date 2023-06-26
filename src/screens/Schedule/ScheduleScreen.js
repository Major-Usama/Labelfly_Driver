import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import { RFValue } from 'react-native-responsive-fontsize'
import CustomCalendar from '../../components/Schedule Delivery/CustomCalendar';
import SelectableTime from '../../components/Schedule Delivery/SelectableTime';
import Button from '../../components/Button';

const { width } = Dimensions.get("window");
export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
     <HeaderBack title={"Schedule a delivery"} />
     <ScrollView
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{paddingBottom:50,}}
     >
      <Text style={styles.fillinfoText}>
      Choose your pickup date and time
      </Text>
      <View style={styles.seprator} />

      <Text
      style={styles.selectaDate}
      >Select a date</Text>
      
      <View>
        <CustomCalendar />
      </View>

      <Text
      style={styles.selectaDate}
      >Select Time</Text>

      <SelectableTime />
      
     
      </ScrollView>
      <View style={styles.buttonContainer}>
      <Button
      title="Confirm"
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

container:
{
   flex:1,
   backgroundColor:'#fff',
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
  selectaDate:
  {
    color:'#212121',
    fontSize:RFValue(18),
    fontFamily:'SemiBold',
    marginTop:RFValue(20),
    marginLeft:RFValue(20),
  },
  buttonContainer:
  {
    position:'absolute',
    left:0,
    right:0,
    bottom:20,
  }
})