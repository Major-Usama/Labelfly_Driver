import React, { useRef, useState } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");
const WINDOW_HEIGHT = Dimensions.get("window").height;
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.36;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const DriverTrackingSheet = (props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [address, setAdress] = useState("Your address");
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        // if (lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y) {
        //   lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
        // } else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
        //   lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
        // }

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation("up");
          } else {
            springAnimation("down");
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation("down");
          } else {
            springAnimation("up");
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction) => {
    console.log("direction", direction);
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
      <View style={styles.draggableArea} {...panResponder.panHandlers}>
        <View style={styles.dragHandle} />
      </View>

      <View style={styles.driverIsarivingContainer}>
        <Text style={styles.discountsheetText}>Driver is arriving.......</Text>

        <View style={styles.timeAwayContainer}>
          <Text style={styles.timeawayText}>5 Min away</Text>
        </View>
      </View>
      <View style={styles.seprator} />

      <View style={styles.driverDetailsMainContainer}>
    
    <View style={styles.driverDetailsLeftContainer}>
    
    <Image
    source={require('../../assets/icons/Tracking/driver.png')}
    style={styles.driverIcon}
    />

    <View>
        <Text style={styles.driverNameText}>Driver Name</Text>
        <Text style={styles.drivervehicleText}>Motor cycle Name</Text>
    </View>
    </View>

    <View>
    <View style={styles.timeAwayContainer}>
          <Text style={styles.timeawayText}>40 Trips</Text>
        </View>
    <View style={styles.driverRatingsContainer}>
     
     <Image
     style={styles.star}
     source={require('../../assets/icons/Activity/halfstar.png')}
     />

     <Text style={styles.ratingsText}>4.8</Text>
    </View>
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
      
    </Animated.View>
  );
};

const styles = StyleSheet.create({


  driverDetailsMainContainer:
  {
    
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-between",
    marginTop:RFValue(20),
    paddingHorizontal:20,
  },

  driverRatingsContainer:
  {
    flexDirection:'row',
    alignItems:'center',
    marginTop:RFValue(10)
  },
  ratingsText:
  {
    color:'#424242',
    fontSize:RFValue(12),
    fontFamily:'Medium',
  },

  star:
  {
    width:20,
    height:20,
    marginRight:8,
  },
  driverDetailsLeftContainer:
  {
   flexDirection:'row',
   alignItems:'center',
  },

  driverNameText:
  {
     color:'#212121',
     fontSize:RFValue(16),
     fontFamily:"Bold",
  },
  drivervehicleText:
  {
    color:'#616161',
    fontSize:RFValue(12),
    fontFamily:"Medium",
    marginTop:6
  },
  driverIcon:
  {
  width:RFValue(50),
  height:RFValue(50),
  marginRight:RFValue(16)
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: "100%",
    height: 54,
    alignSelf: "center",
    alignItems: "center",
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    marginTop: 8,
  },

  discountsheetText: {
    color: "#212121",
    fontFamily: "Bold",
    fontSize: RFValue(20),
  },
  seprator: {
    width: "90%",
    height: 1,
    backgroundColor: "#eeeeee",
    marginTop: RFValue(20),
    alignSelf: "center",
  },
  containerWrapper: {
    alignSelf: "center",
    marginTop: RFValue(20),
  },
  selectcontainer: {
    width: width - 48,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: RFValue(20),
    flexDirection: "row",
    paddingHorizontal: RFValue(14),
  },
  containerActive: {
    borderWidth: 2,
    borderColor: "#0C4DA2",
  },
  image: {
    width: RFValue(100),
    height: RFValue(90),
    marginRight: 16,
  },
  containerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: RFValue(16),
    fontFamily: "Bold",
    marginBottom: 12,
    color: "#212121",
  },
  number: {
    fontSize: RFValue(14),
    color: "#000",
    fontFamily: "Bold",
  },
  email: {
    fontSize: RFValue(14),
    color: "#000",
    fontFamily: "Bold",
  },

  clock: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  time: {
    fontSize: RFValue(10),
    color: "#616161",
    fontFamily: "Medium",
    marginRight: 12,
  },
  minawayContaniner: {
    width: 75,
    height: 24,
    borderRadius: 6,
    backgroundColor: "rgba(16, 16, 16, 0.08)",
    justifyContent: "center",
    alignItems: "center",
  },
  minawaytext: {
    fontSize: 10,
    fontFamily: "SemiBold",
    color: "#35383F",
  },
  remainingTimeMainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: RFValue(16),
    color: "#212121",
    fontFamily: "Bold",
    marginTop: 12,
  },

  timeAwayContainer: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "rgba(16, 16, 16, 0.08)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  timeawayText: {
    fontSize: RFValue(9),
    color: "#35383F",
    fontFamily: "SemiBold",
  },
  driverIsarivingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
    marginTop: RFValue(20),
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
});

export default DriverTrackingSheet;
