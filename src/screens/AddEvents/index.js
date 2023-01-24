import React from "react";
import { 
    View,
    Text, 
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'


const AddEvents = (props) => {
    const [selected, setSelected] = React.useState("");
    const data = [
        {key:'1', value:'Course'},
        {key:'2', value:'Musculation'},
        {key:'3', value:'Football'},
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.titre}>Créer ton evenement</Text>

            <Text style={styles.txt}>Ton sport</Text>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
            />
            <Text style={styles.txt}>Date et horaire</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.txt_add}>
                <Text style={{width: 80, textAlign: 'center'}}>02/04/22</Text>
              </View>
              <View style={styles.txt_add}>
                <Text style={{width: 80, textAlign: 'center'}}>15 : 30</Text>
              </View>
            </View>
            <Text style={styles.txt}>Lieu</Text>
            <View style={styles.txt_add}>
              <Text>12 rue de la Source, RENNES 35000</Text>
            </View>
            <Text style={styles.txt}>Nombre de participants</Text>

        </View>
    );
};

export default AddEvents;

