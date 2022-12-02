import React, {useState} from "react";
import { View, Text, Pressable, TextInput } from "react-native";
// import MapView from 'react-native-maps';
import styles from "./styles";
import DestinationSearch from "../DestinationSearch";
import HomeScreen from "../home";
import Fontisto from "react-native-vector-icons/Fontisto";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from "@expo/vector-icons";


const MapScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState(MapScreen.initialState);
    return (
        <View style={{width : '100%', height: '100%', marginTop: '8%'}}>
            <MapView 
                style={{width : '100%', height: '100%', position: 'absolute'}}
                initialRegion={{
                latitude: 48.1113387,
                longitude: -1.6800198,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}>
                <Marker
                 coordinate = {{
                    latitude: 48.1113385,
                    longitude: -1.6800198,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                title={"Ceci est un test"}
                description={"description"}
              >
                <FontAwesome5
                  name={"running"}
                  size={26}
                  style={{ 
                        color: "black", 
                        flex: 0.3,
                        backgroundColor: "red",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        padding: 10,
                    }}
                />
              </Marker>
            </MapView>
             <GooglePlacesAutocomplete 
                style={{
                    width : '100%', 
                    height: '100%', 
                    position: 'relative',
                }}
                placeholder='Recherche'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    // console.log("https://nominatim.openstreetmap.org/search?city=Inguiniel");
                }}
                query={{
                    key: 'AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk',
                    language: 'fr',
                }}
                
            />
 
           
            {/* <Fontisto style={styles.Searchbutton} name="search" size={25} color={"#000"}></Fontisto>
            <TextInput style={styles.SearchbuttonText} placeholder="Recherche" value={inputText} onChangeText={setInputText}/> */}
            
            
       </View>
    );
};

export default MapScreen;

// import React from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const MapScreen = () => {
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Recherche'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk',
//         language: 'fr',
//       }}
//     />
//   );
// };

// export default MapScreen;
