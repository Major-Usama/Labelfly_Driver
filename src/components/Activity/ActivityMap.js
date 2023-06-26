import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const MAP_HEIGHT = 160;
const ASPECT_RATIO = width / MAP_HEIGHT;
const LATITUDE = 25.2048; // Dubai Mall latitude
const LONGITUDE = 55.2708; // Dubai Mall longitude
const LATITUDE_DELTA = 0.04; // Adjust the delta values as desired
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CustomMarker = ({ title }) => {
  return (
    <View style={styles.customMarkerContainer}>
      <View style={styles.customMarker}>
        <Text style={styles.customMarkerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const ActivityMap = (props) => {
  const navigation = useNavigation();

//   Your Adresss
  const addressLatitude = 25.1940;
  const addressLongitude = 55.2316;

  // Destination (Dubai Mall) coordinates
  const destinationLatitude = 25.2048;
  const destinationLongitude = 55.2708;

  // Delivery route coordinates
  const routeCoordinates = [
    { latitude: addressLatitude, longitude: addressLongitude },
    { latitude: 25.1950, longitude: 55.2669 }, // Custom coordinate along the road
    { latitude: destinationLatitude, longitude: destinationLongitude },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{...styles.map,borderRadius:props.borderRadius,
        height:props.height
        }}
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {/* Destination Marker with Custom View Label */}
        <Marker coordinate={{ latitude: destinationLatitude, longitude: destinationLongitude }}>
          <CustomMarker title="Dubai Mall :10 Min" />
        </Marker>

        {/* Your Address Marker with Custom View Label */}
        <Marker coordinate={{ latitude: addressLatitude, longitude: addressLongitude }}>
          <CustomMarker title="Address" />
        </Marker>

        {/* Polyline */}
        <Polyline coordinates={routeCoordinates} strokeWidth={4} strokeColor="#9E9E9E" geodesic />
     
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    
  },
  map: {
    width: '100%',
    // height: 160,
    alignSelf: 'center',
    // borderRadius:16,
    overflow:"hidden"
   
  },
  customMarkerContainer: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  customMarker: {
    backgroundColor: '#0C4DA2',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 24,
  },
  customMarkerTitle: {
    color: 'white',
    fontFamily: 'Regular',
    fontSize: RFValue(10), // Adjust the font size as desired
  },
});

export default ActivityMap;
