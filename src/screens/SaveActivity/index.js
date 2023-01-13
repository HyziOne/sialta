import React from "react";
import { 
    View,
    Text, 
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
import styles from "./styles";
import activitys from "../../../assets/data/activity";
import Post from "../../components/Activity";
import { useNavigation } from '@react-navigation/native';
import MapScreen from "../MapScreen";
import MoreInformation from "../MoreInformation";

const SaveActivity = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.heading}h1>Vos activiés</Text>
            {/* <FlatList
                data={feed}
                renderItem={({item}) => <Post post={item} />}
            /> */}
            <FlatList
                data={activitys} 
                renderItem={({ item }) =>  (
                    <TouchableOpacity onPress={() => navigation.navigate('MoreInformation', { itemId: item.id })}>
                    {/* // <TouchableOpacity onPress={() => navigation.navigate('MapScreen', { itemId: item.id }}> */}
                    <Post post={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
            {/* <Image style={styles.img} source={require('/Users/sofiane/Documents/Master/Sialta/Sialta/assets/images/activites/runing 1.png')} /> */}
            {/* <Text>Bonjour</Text> */}
            <Image style={styles.bottom_img} source={require('../../../assets/images/activites/runing_1.png')}/>

        </View>
    );
};

export default SaveActivity;

