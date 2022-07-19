import * as React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import { LatLng, LeafletView } from 'react-native-leaflet';

 LatLng = {
  lat: 37.78825,
  lng: -122.4324,
};

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <LeafletView
        mapMarkers={[
          {
            position: LatLng,
            icon: '📍',
            size: [32, 32],
          },
        ]}
        mapCenterPosition={LatLng}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});