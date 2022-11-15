import { StyleSheet } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    title :{
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    MapView: {
        position: 'relative',
        zIndex: 0,
    },
    //Search
    container: { width: '100%', zIndex: 1, },
    listView: {
        position: 'absolute',
        backgroundColor: '#FFF',
        zIndex: 10,
        },
    GooglePlacesAutocomplete: {
        position: 'absolute',
        zIndex: 999,
    },
    textInputContainer: {
        flexDirection: 'row',
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        height: 44,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
    },
    poweredContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#c8c7cc',
        borderTopWidth: 0.5,
    },
    powered: {},
    // listView:{
    //     position: 'absolute',
    //     backgroundColor: '#FFF',
    //     zIndex: 10,//Forcing it to front
    // },
    row: {
        backgroundColor: '#FFFFFF',
        padding: 13,
        height: 44,
        flexDirection: 'row',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#c8c7cc',
    },
    description: {},
    loader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 20,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 5,
    },
    row: {
        backgroundColor: 'transparent',
        paddingVertical: 0,
        paddingHorizontal: 0,
      },
  
});

export default styles;