import React, { useState } from 'react';
import { View, Image, Animated } from 'react-native';

const Loading = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image
        style={{ width: 250, height: 300, resizeMode: "cover", opacity: fadeAnim }}
        source={require('../../../assets/images/login/Sialta_logo.png')}
        onLoad={fadeIn}
      />
    </View>
  );
};

export default Loading;
