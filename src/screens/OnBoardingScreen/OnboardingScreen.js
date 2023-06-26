import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("screen");

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < 2) {
      swiperRef.current.scrollBy(1);
    }
  };


  const renderNextButton = () => {
    return (
      <View>
        {/* <Button onPress={handleNext} title="Next" /> */}
        <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={false}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {/* First onboarding screen */}
        <View style={styles.slide}>
          <Image
            style={styles.onBoradImageTop}
            source={require("../../assets/images/onboard2.jpg")}
          />

          <View style={styles.contentContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/icons/logosmall.png")}
            />

            <Text style={styles.onBoardDescription}>
              Welcome to label Fly,Enjoy{"\n"}
              having your favorite product{"\n"}
              delivered right to your{"\n"}
              doorstep in real-time.
            </Text>
          </View>
        </View>

        {/* Second onboarding screen */}
        <View style={styles.slide}>
          <Image
            style={styles.onBoradImageTop}
            source={require("../../assets/images/onboard1.jpg")}
          />

          <View style={styles.contentContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/icons/logosmall.png")}
            />

            <Text style={styles.onBoardDescription}>
              Make your life easier with{"\n"}
              features like real-time order{"\n"}
              tracking and contactless{"\n"}
              delivery options.
            </Text>
          </View>
        </View>

        {/* Third onboarding screen */}
        <View style={styles.slide}>
          <Image
            style={styles.onBoradImageTop}
            source={require("../../assets/images/onboard3.jpg")}
          />

          <View style={styles.contentContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/icons/logosmall.png")}
            />

            <Text style={styles.onBoardDescription}>
              Join the millions of satisfied{"\n"}
              customers who use our app to{"\n"}
              order products and goods{"\n"}
              from their favorite retailers.
            </Text>
          </View>
        </View>
      </Swiper>

      <View style={styles.footerContainer}>
        <View style={styles.footerLeftContainer}>
          <View style={styles.pagination}>
            {[0, 1, 2].map((index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
          <View style={styles.bottomContainer}>{renderNextButton()}</View>
        </View>

        {currentIndex === 0 || currentIndex === 1 ? (
          <TouchableOpacity activeOpacity={0.8} onPress={handleNext}>
            <Image
              style={styles.nextButton}
              source={require("../../assets/icons/nextbutton.jpg")}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("WelcomeScreen")}
          >
            <Image
              style={styles.nextButton}
              source={require("../../assets/icons/nextbutton.jpg")}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gifContainer: {
    alignSelf: "center",
  },
  slide: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(12, 77, 162, 0.2)",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#0C4DA2",
    width: 20,
    height: 6,
    borderRadius: 6,
  },
  bottomContainer: {},

  skipText: {
    fontSize: RFValue(13),
    color: "#212121",
    fontFamily: "Medium",
    marginTop: RFValue(55),
  },
  onBoradImageTop: {
    width: width,
    height: height / 2.3,
  },
  logo: {
    width: 48,
    height: 49,
    resizeMode: "contain",
  },
  onBoardDescription: {
    fontSize: RFValue(22),
    fontFamily: "SemiBold",
    color: "#212121",
    marginTop: RFValue(12),
    lineHeight: RFValue(32),
  },
  contentContainer: {
    marginTop: RFValue(22),
    marginLeft: RFValue(20),
  },
  nextButton: {
    width: RFValue(110),
    height: RFValue(200),
    resizeMode: "contain",
    
  },
  footerLeftContainer: {
    marginLeft: RFValue(20),
    marginTop: RFValue(60),
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default OnboardingScreen;
