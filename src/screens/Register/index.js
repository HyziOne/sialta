import React, { useState } from 'react';
import { View, Text, TextInput, DatePickerIOS, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

const Register = () => {
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDOB] = useState(new Date());
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Pseudo"
          value={pseudo}
          onChangeText={setPseudo}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <DatePickerIOS
          style={styles.datePicker}
          date={dob}
          onDateChange={setDOB}
        />
        <Button title="Register" onPress={handleRegister} />
      </View>
    );
  };

  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Ajouter les informations de l'utilisateur à la base de données
        firebase
          .database()
          .ref(`users/${user.user.uid}`)
          .set({
            name,
            firstName,
            pseudo,
            email,
            dob,
          })
          .then(() => {
            // Navigate to profile page
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };