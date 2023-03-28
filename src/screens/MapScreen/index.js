import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Button,
  TouchableHighlight,
  Modal,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
// import MapView from 'react-native-maps';
import styles from "./styles";
import DestinationSearch from "../DestinationSearch";
import HomeScreen from "../home";
import Fontisto from "react-native-vector-icons/Fontisto";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome5 } from "@expo/vector-icons";
import Localisation from "react-native-geocoding";
import SaveActivity from "../SaveActivity";
import MapModal from "../../components/MapModal";
import CallButton from "../../components/Calling/CallButton";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  getFirestore,
  firestore,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { async, stringify } from "@firebase/util";
// import { getAuth } from "firebase/auth";

Localisation.init("AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk");
// const auth = getAuth();

const MapScreen = ({ navigation }) => {
  const [date, dateField] = React.useState(null);
  const [hour, hourField] = React.useState(null);
  const [data, dataField] = React.useState(null);
  const [docIdModal, setDocId] = React.useState(null);
  const [dataModal, setDataModal] = React.useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = (docId) => {
    setDocId(docId);
    // console.log(docId);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  // const [inputText, setInputText] = useState(MapScreen.initialState);
  const [searchTerm, setSearchTerm] = useState("");
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
  // console.log(auth.currentUser.uid);

  const [markers, setMarkers] = useState([]);

  const pathObject = {
    "Course": require("../../../assets/images/Icons/sport/Course.png"),
    "Musculation": require("../../../assets/images/Icons/sport/Musculation.png"),
    "Football": require("../../../assets/images/Icons/sport/Football.png"),
  };
  

  const AllMarkers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "map"));
      const markers = [];
      querySnapshot.forEach((doc) => {
        const activityName = doc.data().activity;
        const path = pathObject[activityName] || pathObject.default;
        console.log(path);
        let iconMarker = "";
        
        markers.push(
          <Marker
            key={doc.id}
            coordinate={{
              latitude: doc.data().geoloc.lat,
              longitude: doc.data().geoloc.lng,
            }}
            onPress={() => showModal(doc.id)}
          >
            <View>
              <Image source={path} />
              
            </View>
          </Marker>
        );
      });
      setMarkers(markers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllMarkers();
  }, []);

  useEffect(() => {
    async function AllMarkers() {
      const newMarkers = await Search();
      setMarkers(newMarkers);
    }
    AllMarkers();
  }, []);

  useEffect(() => {
    async function getDocData() {
      const c = collection(db, "map");
      const modalDoc = doc(c, docIdModal);
      const document = await getDoc(modalDoc);
      const data = document.data();
      setDataModal(data);
      const jsonDoc = JSON.stringify(data);
    }
    getDocData();
  }, [docIdModal]);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     AllMarkers();
  //   }, 15000); // call AllMarkers function every 15 seconds
  //   return () => clearInterval(interval);
  // }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      AllMarkers();
    }, 15000); // call AllMarkers function every 15 seconds
    return () => clearInterval(interval);
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={location} region={location}>
        {markers}
      </MapView>
      {!!dataModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={hideModal}
        >
          <View style={styles.backgroundModal}>
            <View style={styles.content_modal}>
              <TouchableHighlight style={{position: 'absolute', alignSelf: "flex-end", padding: 10}} onPress={hideModal}>
                {/* <Text
                  style={{ alignSelf: "flex-end", color: "#FFF", fontSize: 22 }}
                >
                  X
                </Text> */}
                <FontAwesome5
                  name={"times"}
                  size={22}
                  style={{color: "#FFF"}}
                />
              </TouchableHighlight>
              <Text style={styles.title_modal}>
                Rendez vous de votre activité
              </Text>
              <Text style={styles.txt_modal}>Date et horaire</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.txt_add}>
                  <Text style={{ width: 80, textAlign: "center" }}>
                    {dataModal.date}
                  </Text>
                </View>
                <View style={styles.txt_add}>
                  <Text style={{ width: 80, textAlign: "center" }}>
                    {dataModal.hour}
                  </Text>
                </View>
              </View>
              <Text style={styles.txt_modal}>Lieu</Text>
              <View style={styles.txt_add}>
                <Text>{dataModal.name}</Text>
              </View>
              <Text style={styles.txt_modal}>Nombre de participants</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.txt_add}>
                  <Text style={{ width: 30, textAlign: "center" }}>{dataModal.max}</Text>
                </View>
              </View>

              <Text
                style={{
                  color: "#FFF",
                  fontSize: 18,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Niveau intermediaire
              </Text>
              <View style={styles.button_modal}>
                {/* <Button
                  title="Participer"
                  color="#FFF"
                  onPress={() => navigation.navigate("SaveActivity")}    
                  // hideModal()              
                /> */}
                <TouchableOpacity onPress={() => { navigation.navigate("SaveActivity"); hideModal(); }}>
                  <Text style={{color: '#FFF', fontSize: 18, paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10}}>Je participe</Text>
                </TouchableOpacity>

              </View>
            </View>
            {/* <MapModal></MapModal> */}
          </View>
        </Modal>
      )}
      <View style={styles.search}>
        <FontAwesome5
          name={"search"}
          size={20}
          style={{
            paddingRight: 10,
          }}
        />
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
          placeholder="Recherche"
        />
      </View>
      <View>
        <CallButton/>
      </View>
    </View>
  );
};

export default MapScreen;
