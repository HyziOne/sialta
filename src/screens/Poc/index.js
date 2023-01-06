// import React, {useState} from "react";
// import {View, Text, TextInput, FlatList } from "react-native";
// // import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// import styles from "./styles";
// import search from "../../../assets/data/search";
// import Entype from 'react-native-vector-icons/Entypo';

// const PocMaker = ({ navigation }) => {


//     return (
        
        
//     );
// };

// export default PocMaker;
import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';
export default class CustomMarker extends PureComponent {
  constructor() {
    super();
    this.state = {
      tracksViewChanges: true,
    };
  }
  stopTrackingViewChanges = () => {
    this.setState(() => ({
      tracksViewChanges: false,
    }));
  }
  render() {
    const { tracksViewChanges } = this.state;
    const { marker } = this.props;
  return (
      <Marker
        coordinate = {{
                    latitude: 48.1113385,
                    longitude: -1.6800198,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
        tracksViewChanges={tracksViewChanges}
      >
        <Image
          onLoad={this.stopTrackingViewChanges}
          fadeDuration={0}
        />
      </Marker>
    );
  }
}
// export default PocMaker;
