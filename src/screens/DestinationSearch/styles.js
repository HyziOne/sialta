import { StyleSheet } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    iconContainer: {
        backgroundColor: '#D4D4D4',
        padding: 10,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold',

    }
});

export default styles;