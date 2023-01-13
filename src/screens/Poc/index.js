// // import React, {useState} from "react";
// // import {View, Text, TextInput, FlatList } from "react-native";
// // // import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

// // import styles from "./styles";
// // import search from "../../../assets/data/search";
// // import Entype from 'react-native-vector-icons/Entypo';

// // const PocMaker = ({ navigation }) => {


// //     return (
        
        
// //     );
// // };

// // export default PocMaker;
// import React, { PureComponent } from 'react';
// import { Image } from 'react-native';
// import { Marker } from 'react-native-maps';
// export default class CustomMarker extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       tracksViewChanges: true,
//     };
//   }
//   stopTrackingViewChanges = () => {
//     this.setState(() => ({
//       tracksViewChanges: false,
//     }));
//   }
//   render() {
//     const { tracksViewChanges } = this.state;
//     const { marker } = this.props;
//   return (
//       <Marker
//         coordinate = {{
//                     latitude: 48.1113385,
//                     longitude: -1.6800198,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//         tracksViewChanges={tracksViewChanges}
//       >
//         <Image
//           onLoad={this.stopTrackingViewChanges}
//           fadeDuration={0}
//         />
//       </Marker>
//     );
//   }
// }
// // export default PocMaker;



// import React, { useState } from 'react';
// import { View, Text, Modal, TouchableHighlight } from 'react-native';
// import { Marker } from 'react-native-maps';

// const MonPoc = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const showModal = () => {
//     setModalVisible(true);
//   }

//   const hideModal = () => {
//     setModalVisible(false);
//   }

//   return (
//     <View>
//       <Marker
//         coordinate={{latitude: 37.78825, longitude: -122.4324}}
//         onPress={showModal}
//       />
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={modalVisible}
//         onRequestClose={hideModal}
//       >
//         <View style={{marginTop: 22}}>
//           <View>
//             <Text>Hello World!</Text>

//             <TouchableHighlight
//               onPress={hideModal}
//             >
//               <Text>Close</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }
// export default MonPoc;


// import Localisation from 'react-native-geocoding';
// Localisation.init("AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk");

// const MapScreen = ({ navigation }) => {    

//   const [searchTerm, setSearchTerm] = useState('');
//   const [location, setLocation] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const handleSearch = async () => {
//     try {
//       const response = await Localisation.from(searchTerm);
//       const firstResult = response.results[0];
//       const location = firstResult.geometry.location;
//       setLocation({
//         latitude: location.lat,
//         longitude: location.lng,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={location}
//         region={location}
//       >
//         <Marker coordinate={location} />
//       </MapView>
//       <View style={{ position: 'absolute', top: 20, left: 20, right: 20 }}>
//         <TextInput
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//           onSubmitEditing={handleSearch}
//           placeholder="Search for a location"
//         />
//       </View>
//     </View>
//   );
// }

// export default MapScreen;

import React, { useState } from 'react';
import { View, Text, Modal, TouchableHighlight, Button } from 'react-native';
import { Marker } from 'react-native-maps';
import data from '../../../assets/data/activity';

const MonPoc = () => {
  const [selected, setSelected] = useState(1);
  

  return (
    <View style={{marginTop: 70}}>
      {data.map(item => (
        <Button
          key={item.id}
          title={item.type}
          onPress={() => setSelected(item.id)}
        />
      ))}
      <Text>Selected: {data.find(item => item.id === selected).type}</Text>
    </View>
  );
}
export default MonPoc;
