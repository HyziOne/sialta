import React, {useState} from "react";
import { View, Text, Pressable, TextInput, Button, TouchableHighlight, Modal } from "react-native";
// import MapView from 'react-native-maps';
import styles from "./styles";
import DestinationSearch from "../DestinationSearch";
import HomeScreen from "../home";
import Fontisto from "react-native-vector-icons/Fontisto";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome5 } from "@expo/vector-icons";
import Geocoder from 'react-native-geocoding';


const MapScreen = ({ navigation }) => {
    const [date, dateField] = React.useState(null);
    const [hour, hourField] = React.useState(null);
    const [data, dataField] = React.useState(null);

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }
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
                // title={"Ceci est un test"}
                // description={"description"}
                onPress={showModal}
              >
                {/* <Image style={styles.bottom_img} source={require('../../../assets/images/activites/runing_1.png')}/> */}
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

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={hideModal}
        >
        <View style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
          <View style={{ 
              backgroundColor: '#4AA5B0', 
              padding: 20, 
              color: '#FFF',
              borderTopRightRadius: '15',
              borderTopLeftRadius: '15',
              borderBottomLeftRadius: '15',
              borderBottomRightRadius: '15', }}>
            <TouchableHighlight
              onPress={hideModal}
            >
              <Text style={{alignSelf: 'flex-end', color: '#FFF'}}>X</Text>
            </TouchableHighlight>
            <Text>Rendez vous de votre activité</Text>
            <Text>Date et horaire</Text>
            <TextInput
              style={styles.input}
            //   onChangeText={dateField}
              value={date}
              placeholder="13/05"
              secureTextEntry={false}
            />
            <TextInput
                style={styles.input}
                // onChangeText={hourField}
                value={hour}
                placeholder="15h30"
                secureTextEntry={false}
            />
            <Text>Lieu</Text>
            <Text>Nombre de participants</Text>
            <Text>Niveau intermediaire</Text>
            {/* <Button>Participer</Button> */}
            <View style={{
                    marginTop: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderColor: '#EF4124',
                    borderRadius: 15,
                    backgroundColor: '#EF4124',
                    alignSelf: 'center',
                  }}>
            <Button 
                title="Participer"
                color="#FFF"
                // onPress={() => Alert.alert('Bravo')}
            />
            </View>



          </View>
        </View>
      </Modal>
            {/* <TouchableHighlight style={[styles.searchBar, { width : '80%',height: '100%', position: 'relative', }]}> */}
                {/* <GooglePlacesAutocomplete 
                    style={{
                        width : '80%', 
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
                    
                /> */}
            {/* </TouchableHighlight> */}
 
           
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
