import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
// import Lightbox from 'react-native-lightbox';

const MoreInformation = (props) => {
  return (
    <View>
      <Text>Information</Text>

      {/* <Lightbox
        swipeToDismiss={false}
        renderHeader={close => (
          <TouchableOpacity onPress={close}>
            <Text>Fermer</Text>
          </TouchableOpacity>
        )}
      >
        <Image
          source={{ uri: 'https://www.arts-in-the-city.com/wp-content/uploads/2022/04/bansky_3.jpg' }}
          style={{ width: 200, height: 200 }}
        />
      </Lightbox> */}
    </View>
  );
};

export default MoreInformation;
