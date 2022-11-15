import { StyleSheet } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title :{
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    button :{
        backgroundColor: 'white',
        height: 40,
        width: 200,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
    }, 
    buttonText :{
        fontSize: 15,
        fontWeight: 'bold',
    },
    Searchbutton :{
        backgroundColor: 'white',
        height: 40,
        width: Dimensions.get('screen').width - 20,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: 25,
        zIndex: 100,
    }, 
    SearchbuttonText :{
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default styles;