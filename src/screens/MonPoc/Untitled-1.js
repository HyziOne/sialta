import Localisation from "react-native-geocoding";
Localisation.init("AIzaSyChyGfs7E5phymHzJZHg7W4gwFQAfKixQk");

const MapScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleSearch = async () => {
    try {
      const response = await Localisation.from(searchTerm);
      const firstResult = response.results[0];
      const location = firstResult.geometry.location;
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
      <MapView style={{ flex: 1 }} initialRegion={location} region={location}>
        <Marker coordinate={location} />
      </MapView>
      <View style={{ position: "absolute", top: 20, left: 20, right: 20 }}>
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
          placeholder="Search for a location"
        />
      </View>
    </View>
  );
};

export default MapScreen;
