import React from "react";
import { 
    View,
    Text, 
    FlatList,
    Image
} from "react-native";
import styles from "./styles";
import feed from "../../../assets/data/activity";
import Post from "../../components/Activity";

const SaveActivity = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}h1>Vos activiés</Text>
            <FlatList
                data={feed}
                renderItem={({item}) => <Post post={item} />}
            />
            {/* <Image style={styles.img} source={require('/Users/sofiane/Documents/Master/Sialta/Sialta/assets/images/activites/runing 1.png')} /> */}
            {/* <Text>Bonjour</Text> */}
            <Image style={styles.bottom_img} source={require('../../../assets/images/activites/runing_1.png')}/>

        </View>
    );
};

export default SaveActivity;

