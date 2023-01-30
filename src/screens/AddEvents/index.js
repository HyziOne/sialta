// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Button,
// } from "react-native";
// import styles from "./styles";
// import { useNavigation } from "@react-navigation/native";
// import { SelectList } from "react-native-dropdown-select-list";
// import { doc, setDoc, GeoPoint } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import Localisation from "react-native-geocoding";
// import randomstring from "randomstring";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

// // import DatePicker from "react-native-date-picker";
// Localisation.init("AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk");
// const rdm = randomstring.generate(12);

// const AddEvents = (props) => {
//   const [selected, setSelected] = React.useState("");
//   const navigation = useNavigation();
//   const [lat, setLat] = useState("");
//   const [long, setLong] = useState("");
//   const [name, setName] = useState("");

//   async function CoordinateEvent() {
//     await setDoc(doc(db, "map", rdm), {
//       lat: lat,
//       long: long,
//       name: name,
//     });
//   }
//   const data = [
//     { key: "1", value: "Course" },
//     { key: "2", value: "Musculation" },
//     { key: "3", value: "Football" },
//   ];

//   // const [searchTerm, setSearchTerm] = useState("");
//   // const [location, setLocation] = useState({
//   //   latitude: 48.1113387,
//   //   longitude: -1.6800198,
//   // });

//   // const handleSearch = async () => {
//   //   try {
//   //     const response = await Localisation.from(searchTerm);
//   //     const firstResult = response.results[0];
//   //     const location = firstResult.geometry.location;
//   //     console.log(location);
//   //     setLocation({
//   //       latitude: location.lat,
//   //       longitude: location.lng,
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const [searchTerm, setSearchTerm] = useState("");
//   const [location, setLocation] = useState([48.1113387, -1.6800198]);
//   const [locationLat, setLatLocation] = useState([48.1113387]);
//   const [locationLong, setLongLocation] = useState([-1.6800198]);

//   const handleSearch = async () => {
//     try {
//       const response = await Localisation.from(searchTerm);
//       const firstResult = response.results[0];
//       const location = firstResult.geometry.location;
//       // console.log(location);
//       setLocation([location.lat, location.lng]);
//       setLatLocation([location.lat]);
//       setLongLocation([location.lng]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titre}>Créer ton evenement</Text>
//       <Text>{location.lng}</Text>
//       <Text style={styles.txt}>Ton sport</Text>
//       <View style={{backgroundColor: "#FFF", borderRadius: 10 }}>
//         <SelectList
//             setSelected={(val) => setSelected(val)}
//             data={data}
//             save="value"
//             arrowicon={<FontAwesome name="chevron-down" size={12} color={'#000'} />} 
//             placeholder="Sport à choisir"
//             searchPlaceholder="Sport à choisir"
//           />
//       </View>
       
//       <Text style={styles.txt}>{locationLat}</Text>
//       <Text style={styles.txt}>{locationLong}</Text>

//       <Text style={styles.txt}>Date et horaire</Text>

//       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//         <View style={styles.txt_add}>
//           <Text style={{ width: 80, textAlign: "center" }}>02/04/22</Text>
//         </View>
//         <View style={styles.txt_add}>
//           <Text style={{ width: 80, textAlign: "center" }}>15 : 30</Text>
//         </View>
//       </View>
//       <Text style={styles.txt}>Lieu</Text>
//       {/* <Text style={styles.txt}>{location}</Text> */}
//       <View style={styles.txt_add}>
//         {/* <Text>12 rue de la Source, RENNES 35000</Text> */}
//         <TextInput placeholder={lat} onChangeText={(lat) =>setLat(lat)} style={styles.textBoxes}></TextInput>
//         <TextInput placeholder={long} onChangeText={(long) =>setLong(long)} style={styles.textBoxes}></TextInput>
//         <TextInput placeholder="Sport" onChangeText={setName} style={styles.textBoxes}></TextInput>

//         <Button title="Publier" onPress={CoordinateEvent} />
//         <TextInput
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//           onSubmitEditing={handleSearch}
//           placeholder="Recherche"
//         />
//       </View>
//       <Text style={styles.txt}>Nombre de participants</Text>
//     </View>
//   );
// };

// export default AddEvents;


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
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
    });
  }

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
      <View style={{backgroundColor: "#FFF", borderRadius: 10 }}>
        <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            arrowicon={<FontAwesome name="chevron-down" size={12} color={'#000'} />} 
            placeholder="Sport à choisir"
            searchPlaceholder="Sport à choisir"
          />
      </View>

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
