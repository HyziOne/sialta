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
import Localisation from 'react-native-geocoding';
import SaveActivity from '../SaveActivity';
import MapModal from "../../components/MapModal";

Localisation.init("AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk");

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
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState({
    latitude: 48.1113387,
    longitude: -1.6800198,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleSearch = async () => {
    try {
      const response = await Localisation.from(searchTerm);
      const firstResult = response.results[0];
      const location = firstResult.geometry.location;
      console.log(location);
      setLocation({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={location}
        region={location}
      >
        <Marker
          coordinate = {{
            latitude: 48.1113385,
            longitude: -1.6800198,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        onPress={showModal}
      >
        <FontAwesome5
          name={"running"}
          size={26}
        />
      </Marker>
      
      </MapView>
      <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={hideModal}
        >
        <View style={styles.backgroundModal}>
          <View style={styles.content_modal}>
            <TouchableHighlight
              onPress={hideModal}
            >
              <Text style={{alignSelf: 'flex-end', color: '#FFF', fontSize: 22}}>X</Text>
            </TouchableHighlight>
            <Text style={styles.title_modal}>Rendez vous de votre activité</Text>
            <Text style={styles.txt_modal}>Date et horaire</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.txt_add}>
                <Text style={{width: 80, textAlign: 'center'}}>02/04/22</Text>
              </View>
              <View style={styles.txt_add}>
                <Text style={{width: 80, textAlign: 'center'}}>15 : 30</Text>
              </View>
            </View>
            <Text style={styles.txt_modal}>Lieu</Text>
            <View style={styles.txt_add}>
              <Text>12 rue de la Source, RENNES 35000</Text>
            </View>
            <Text style={styles.txt_modal}>Nombre de participants</Text>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.txt_add}>
                <Text style={{width: 30, textAlign: 'center'}}>5</Text>
              </View>
            </View>
            
            <Text style={{color:'#FFF', fontSize: 18, fontWeight: '600', textAlign: 'center'}}>Niveau intermediaire</Text>
            <View style={styles.button_modal}>
            <Button 
                title="Participer"
                color="#FFF"
                onPress={() => navigation.navigate('Search')}
            />


            </View>
          </View>
          {/* <MapModal></MapModal> */}
        </View>
      </Modal>
      <View style={styles.search}>
        <FontAwesome5
        name={"search"}
        size={20}
        style={{ 
          paddingRight: 10, 
        }}/>
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
          placeholder="Recherche"
        />
      </View>
    </View>
  );
}

export default MapScreen;
