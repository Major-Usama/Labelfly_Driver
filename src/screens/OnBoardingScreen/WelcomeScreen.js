import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import WelcomeBox from "../../components/WelcomeBox";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const swipeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [panResponder, setPanResponder] = useState(null);

  useEffect(() => {
    const newPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10 && Math.abs(gestureState.vx) < 0.5;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy < 0) {
          swipeAnim.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -100) {
          // Swipe-up threshold crossed, navigate to sign-up screen
          handleSwipe();
        } else {
          // Reset the swipe animation
          Animated.spring(swipeAnim, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    });

    setPanResponder(newPanResponder);

    const unsubscribe = navigation.addListener("beforeRemove", () => {
      // Reset the swipe animation when leaving the screen
      Animated.spring(swipeAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    });

    // Set the initial position of swipeAnim to 0
    swipeAnim.setValue(0);

    return () => {
      unsubscribe();
    };
  }, [swipeAnim, navigation]);

  const handleSwipe = () => {
    navigation.navigate("RegisterScreenName");
  };

  const applyFocusEffect = () => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("transparent");
    // Reset the swipe animation when the screen receives focus
    Animated.spring(swipeAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  useFocusEffect(
    React.useCallback(() => {
      applyFocusEffect();
      return () => {
        StatusBar.setBarStyle("dark-content");
        StatusBar.setBackgroundColor("#fff");
      };
    }, [swipeAnim])
  );

  return (

        <ImageBackground source={require("../../assets/images/welcomeback.png")} style={styles.backgroundImage}>
          <View style={styles.welcomeHeader}>
            <Image
              style={styles.topLeftLogo}
              source={require("../../assets/icons/labelflylofo.png")}
            />
            
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.logintext}>LOG IN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ScreenContentContainer}>
            <Text style={styles.tagLine}>
              <Text style={{ ...styles.tagLine, color: "#5499F2" }}>Delivery.</Text>
              {"\n"}
              Like never{"\n"}
              Before.
            </Text>

            <Text style={styles.desc}>
              Join the millions of satisfied customers !{"\n"}
              Slide to discover more.
            </Text>

            <WelcomeBox />
          </View>

          {panResponder && (
            <Animated.View
              {...panResponder.panHandlers}
              style={[
                styles.footer,
                {
                  transform: [{ translateY: swipeAnim }],
                },
              ]}
            >
              <Text style={styles.swipeText} pointerEvents="none">
                Swipe to Sign Up
              </Text>
            </Animated.View>
          )}
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  welcomeHeader: {
    marginTop: Platform.OS === "android" ? RFValue(55) : RFValue(60),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(21),
  },
  topLeftLogo: {
    width: RFValue(120),
    height: RFValue(30),
  },
  logintext: {
    fontSize: 16,
    fontFamily: "Bold",
    color: "#fff",
  },
  tagLine: {
    fontSize: RFValue(42),
    fontFamily: "Bold",
    color: "#fff",
    lineHeight: RFValue(45),
    paddingLeft: RFValue(14),
  },
  desc: {
    fontSize: RFValue(16),
    color: "#fff",
    fontFamily: "SemiBold",
    marginTop: RFValue(18),
    paddingLeft: RFValue(20),
  },
  ScreenContentContainer: {
    marginTop: height / 6,
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: RFValue(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  swipeText: {
    color: "#fff",
    fontFamily: "Regular",
    fontSize: RFValue(13),
    textAlign: "center",
  },
});
