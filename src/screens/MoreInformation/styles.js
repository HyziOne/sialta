import { StyleSheet } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF9F0',
        height: '100%',
    },
    heading: {
        textAlign: 'center',
        padding: 20,
        marginTop: 30,
        fontSize: 35,
        color: '#1F2859',
        fontWeight: '700',
      },
      subtitle: {
        color: '#1F2859', 
        marginLeft: 30, 
        marginTop: 20, 
        fontSize: 18, 
        fontWeight: '600'
      },
      image:{
          width: '50%',
          height: '100%',
          position: 'absolute',
          left: '80%',
          right: '50%',
          top: 100,
          zIndex: -1,
          resizeMode:'contain',
      },
      run_img: {
         width: 125, 
         height: 125, 
         transform: [{ scaleX: -1 }],
         marginLeft: 30,
      }, 
      txt: {
        color: '#1F2859', 
        fontSize: 14,
        marginLeft: 30,
        width: 200, 
        
      }

});


export default styles;