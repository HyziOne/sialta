import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { doc, setDoc, GeoPoint } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Localisation from "react-native-geocoding";
import randomstring from "randomstring";

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

  async function CoordinateEvent() {
    const response = await Localisation.from(name);

    const firstResult = response.results[0];
    const location = firstResult.geometry.location;
    console.log(location);

    await setDoc(doc(db, "map", rdm), {
      lat: location.lat,
      long: location.long,
      name: name,
    });
  }

  // const handleSearch = async () => {
  //   try {
  //     const response = await Localisation.from(searchTerm);
  //     const firstResult = response.results[0];
  //     const location = firstResult.geometry.location;
  //     // console.log(location);
  //     setLocation([location.lat, location.lng]);
  //     setLatLocation([location.lat]);
  //     setLongLocation([location.lng]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const data = [
    { key: "1", value: "Course" },
    { key: "2", value: "Musculation" },
    { key: "3", value: "Football" },
  ];
 

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Créer ton evenement</Text>
      <Text>{location.lng}</Text>
      <Text style={styles.txt}>Ton sport</Text>
      <Text style={styles.txt}>{location}</Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />

      <Text style={styles.txt}>Date et horaire</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.txt_add}>
          <Text style={{ width: 80, textAlign: "center" }}>02/04/22</Text>
        </View>
        <View style={styles.txt_add}>
          <Text style={{ width: 80, textAlign: "center" }}>15 : 30</Text>
        </View>
      </View>
      <Text style={styles.txt}>Lieu</Text>
      <View style={styles.txt_add}>
        <TextInput placeholder={name} onChangeText={setName} style={styles.textBoxes}></TextInput>

        <Button title="Publier" onPress={CoordinateEvent} />
      </View>
      <Text style={styles.txt}>Nombre de participants</Text>
    </View>
  );
};

export default AddEvents;
