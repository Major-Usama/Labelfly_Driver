import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

export default function PromotionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Promotions</Text>
    </View>
  )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    backgroundColor:'#fff',
},
text:
{
    fontSize:RFValue(24),
    color:'#212121',
    fontFamily:'SemiBold',
    marginTop:RFValue(64),
    textAlign:"center"
}

})