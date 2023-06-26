import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image,Platform,ScrollView} from "react-native";
import React,{useState} from "react";
import HeaderBack from "../../components/HeaderBack";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
import Button from "../../components/Button";
import TrackPackageModal from "../../components/TrackPackageModal";

const {width}= Dimensions.get('window')

const PaymentMethodContainer = ({ name, selected, onPress,icon }) => {
    return (
      <TouchableOpacity
        style={[
          styles.paymentMethodContainer,
        ]}
        onPress={onPress}
      >
        <View style={styles.leftContainer}>
          {/* Payment Method Icon */}
         <Image
         style={styles.paymentIcon}
         source={icon}
         />
  
          {/* Payment Method Name */}
          <Text style={styles.name}>{name}</Text>
        </View>
  
         <Ionicons  name={ selected?"radio-button-on":"radio-button-off"} size={24} color="#0C4DA2" />
      </TouchableOpacity>
    );
  };
export default function ChoosePaymentMethodScreen() {
    const [selectedMethod, setSelectedMethod] = useState('card');

    const handleMethodSelection = (method) => {
      setSelectedMethod(method);
    };

    const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

    return (
    <View style={styles.container}>
      <HeaderBack title={"Choose payment method"} />
      <Text style={styles.fillinfoText}>
      Select the payment method you want to use.
      </Text>
      <View style={styles.seprator} />
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:100}}
      >
      

   

  
      <PaymentMethodContainer
      icon={require('../../assets/icons/PlanyourJourney/paypal.png')}
        name="PayPal"
        selected={selectedMethod === 'PayPal'}
        onPress={() => handleMethodSelection('PayPal')}
      />

      <PaymentMethodContainer
         icon={require('../../assets/icons/PlanyourJourney/goole.png')}
        name="Google Pay"
        selected={selectedMethod === 'Google Pay'}
        onPress={() => handleMethodSelection('Google Pay')}
      />

      <PaymentMethodContainer
         icon={require('../../assets/icons/PlanyourJourney/apple.png')}
        name="Apple Pay"
        selected={selectedMethod === 'Apple Pay'}
        onPress={() => handleMethodSelection('Apple Pay')}
      />

      <PaymentMethodContainer
         icon={require('../../assets/icons/PlanyourJourney/card.png')}
        name="•••• •••• •••• •••• 4679"
        selected={selectedMethod === 'card'}
        onPress={() => handleMethodSelection('card')}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonLabel}>Add New Card</Text>
      </TouchableOpacity>

      </ScrollView>
      <View style={styles.footerButtonContainer}>
          <Button
            onPress={openModal}
            title="Pay"
          />
        </View>
        <TrackPackageModal isVisible={modalVisible} closeModal={closeModal} />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginBottom:RFValue(20)
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#fff',
    alignItems: 'center',
    width: '90%',
    alignSelf:"center",
    height: 80,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: RFValue(20),
    paddingHorizontal: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 12,
    fontSize: RFValue(16),
    color: '#212121',
    fontFamily:'Bold',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0C4DA2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: '90%',
    height: 58,
    alignSelf:"center",
    borderRadius: 12,
    backgroundColor: '#E2EEFD',
    justifyContent: 'center',
    alignItems: 'center',

  },
  addButtonLabel: {
    fontSize: RFValue(14),
    color: '#0C4DA2',
    fontFamily: 'Bold',
  },
  paymentIcon:
  {
    width:32,
    height:32,
    resizeMode:"contain"
  },
  footerButtonContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? RFValue(30) : RFValue(30),
    left: 0,
    right: 0,
    paddingHorizontal: RFValue(20),
  },
});
