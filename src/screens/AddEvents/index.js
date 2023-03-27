import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { doc, setDoc, GeoPoint } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Localisation from "react-native-geocoding";
import randomstring from "randomstring";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// import DatePicker from "react-native-date-picker";
Localisation.init("AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk");
const rdm = randomstring.generate(12);

const AddEvents = (props) => {
  const [selected, setSelected] = React.useState("");
  const navigation = useNavigation();
  const [location, setLocation] = useState([]);


  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [max, setMax] = useState("");
  const [desc, setDesc] = useState("");

  async function CoordinateEvent() {
    const response = await Localisation.from(name);

    const firstResult = response.results[0];
    const location = firstResult.geometry.location;
    console.log(name);
    console.log(location);

    await setDoc(doc(db, "map", rdm), {
      geoloc: location,
      name: name,
      activity: activity,
      date: date,
      hour: hour,
      max: max,
      desc: desc,
    });
  }

  const data = [
    { key: "1", value: "Course" },
    { key: "2", value: "Musculation" },
    { key: "3", value: "Football" },
  ];
 

  return (
    <View style={styles.container}>
       <ScrollView>
      <Text style={styles.titre}>Créer ton evenement</Text>
      <Text>{location.lng}</Text>
      <Text style={styles.txt}>Ton sport</Text>
      <Text style={styles.txt}>{location}</Text>
      <View style={{backgroundColor: "#FFF", borderRadius: 10 }}>
        <SelectList
            // setSelected={(val) => setSelected(val)}
            setSelected={(val) => setActivity(val)}
            data={data}
            save="value"
            arrowicon={<FontAwesome name="chevron-down" size={12} color={'#000'} />} 
            placeholder="Sport à choisir"
            searchPlaceholder="Sport à choisir"
          />
      </View>
      <Text style={styles.txt}>Date et horaire</Text>
      {/* <TextInput placeholder={lat} onChangeText={(lat) =>setLat(lat)} style={styles.textBoxes}></TextInput> */}

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.txt_add}>
          <TextInput placeholder="Date" onChangeText={setDate} style={{ width: 80, textAlign: "center" }}></TextInput>
        </View>
        <View style={styles.txt_add}>
          <TextInput placeholder="Horaire" onChangeText={setHour} style={{ width: 80, textAlign: "center" }}></TextInput>
        </View>
      </View>
      <Text style={styles.txt}>Lieu</Text>
      {/* <View style={styles.txt_add}> */}
      <View style={{position: 'relative'}}>
      <View style={{position: 'relative', width: '100%'}}>
        <TextInput  style={styles.txt_add} placeholder={name} onChangeText={setName}></TextInput>
        {/* <GooglePlacesAutocomplete
          placeholder='Entrez une adresse'
          query={{
            key: 'AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk',
            language: 'fr',
          }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // Récupérez les détails de l'adresse sélectionnée et mettez à jour les états lat, long et name
            setLat(details.geometry.location.lat);
            setLong(details.geometry.location.lng);
            setName(data.description);
          }}
          styles={{
            container: {
              flex: 0,
              zIndex: 1000,
              position: 'absolute',
              top: 50,
              left: 0,
              right: 0,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              borderRadius: 5,
              marginHorizontal: 20,
            },
            textInputContainer: {
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#C0C0C0',
            },
            listView: {
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#C0C0C0',
              marginHorizontal: 20,
              marginTop: 10,
              borderRadius: 5,
            },
          }}
          listUnderlayColor='white'
        /> */}

        {/* <Button title="Publier" onPress={CoordinateEvent} /> */}
      </View>
      </View>
        <Text style={styles.txt}>Nombre de participants</Text>
        <TextInput placeholder={max} onChangeText={setMax} style={styles.txt_add}></TextInput>
        <View>
          <Text style={styles.txt}>Description</Text>
          <View style={styles.txt_desc}>
            <TextInput onChangeText={setDesc}></TextInput>
          </View>
        </View>
        <View>
          <Button color="#FFF" title="Publier" onPress={CoordinateEvent} />
        </View>
       </ScrollView>
    </View>
  );
};

export default AddEvents;
