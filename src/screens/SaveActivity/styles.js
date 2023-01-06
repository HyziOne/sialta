import { StyleSheet } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        height: '100%',
        
    },
    heading: {
        textAlign: 'center',
        padding: 20,
        marginTop: 30,
        fontSize: 35,
        color: '#1F2859',
        fontWeight: '500',
      },
    img: {
        width: 300,
        height: 300,
    }
});


export default styles;