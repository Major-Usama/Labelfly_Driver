import React, { useRef } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");
const WINDOW_HEIGHT = Dimensions.get("window").height;
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.65;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.64;
const MAX_UPWARD_TRANSLATE_Y = 0;
const MAX_DOWNWARD_TRANSLATE_Y = BOTTOM_SHEET_MAX_HEIGHT - BOTTOM_SHEET_MIN_HEIGHT; // positive number
const DRAG_THRESHOLD = 50;

const FilterBottomSheet = ({ onClose }) => {
  const animatedValue = useRef(new Animated.Value(MAX_DOWNWARD_TRANSLATE_Y)).current;
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

      <View>
        <Text>Sort & Filter</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: 0,
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
  closeButton: {
    backgroundColor: "#FFF",
    paddingVertical: 16,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF0000",
  },
});

export default FilterBottomSheet;
