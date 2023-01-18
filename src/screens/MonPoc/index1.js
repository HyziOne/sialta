import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MonPoc = (props) => {

  const [selected, setSelected] = useState(1);
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <View>
      {data.map(item => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() => setSelected(item.id)}
        />
      ))}
      <Text>Selected: {data.find(item => item.id === selected).name}</Text>
    </View>
  );
}

export default MonPoc;
