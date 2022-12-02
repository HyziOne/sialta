import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native'


// class SettingsScreen extends Component {
const SettingsScreen = () => {
    const [text, onChangeOldPassword] = React.useState(null);
    const [textbis, onChangeNewPassword] = React.useState(null);
    const [textcheck, onChangeNewPasswordCheck] = React.useState(null);
    return (
        <SafeAreaView>
        <Text>Reinitialiser mot de passe</Text>

        <Text>Ancien mot de passe</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeOldPassword}
            value={text}
            placeholder="Ancien mot de passe"
            secureTextEntry={true}
        />

        <Text>Nouveau mot de passe</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNewPassword}
            value={textbis}
            placeholder="Nouveau mot de passe"  
            secureTextEntry={true}
        />

        <TextInput
            style={styles.input}
            onChangeText={onChangeNewPasswordCheck}
            value={textcheck}
            placeholder="Nouveau mot de passe"
            secureTextEntry={true}
        />
        </SafeAreaView>
    );
}
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  });



export default SettingsScreen