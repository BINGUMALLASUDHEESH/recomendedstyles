import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { URL } from './Url';

const API_URL = `${URL}/users`;

const SignUp = () => {
    console.log(API_URL)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
    const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!name || !email || !password || !age) {
      Alert.alert('All fields are required!');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid email address!');
      return;
    }

    try {

      const emailCheckResponse = await fetch(`${API_URL}?email=${email}`);
      const emailCheckData = await emailCheckResponse.json();

      if (emailCheckData.length > 0) {
        Alert.alert('Email already registered. Please log in!');
        navigation.navigate('Login');
        return;
      }


      const newUser = {
        name,
        email,
        password,
        age,
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      console.log('Response:', response);

      if (response.ok) {
        const responseData = await response.json();
    Alert.alert('Signup Successful');
    await AsyncStorage.setItem('userId', responseData.id.toString());
    await AsyncStorage.setItem('userName', `${name}`);
    navigation.navigate('HairColorOption');
      } else {
        Alert.alert('Error signing up. Please try again.');
      }
    }
    catch (error) {
      console.error('Error:', error);
      Alert.alert('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create A New Account</Text>
      <Text style={styles.subTitle}>
        Already Registered?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Login')}
        >
          Log in here
        </Text>
      </Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>AGE</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#7a7a7a',
  },
  linkText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // For Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5, // For iOS shadow
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    backgroundColor: '#6a0dad',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignUp;
