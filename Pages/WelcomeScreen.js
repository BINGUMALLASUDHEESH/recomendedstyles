import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const WelcomeScreen = ({ route, navigation }) => {
  // Extract parameters passed from previous screen
  const { hairColor: initialHairColor, eyeColor: initialEyeColor, undertoneColor: initialUndertoneColor } = route.params || {};

  // Set up state with values from route params
  const [hairColor, setHairColor] = useState(initialHairColor || 'Brown');
  const [eyeColor, setEyeColor] = useState(initialEyeColor || 'Brown');
  const [undertoneColor, setUndertoneColor] = useState(initialUndertoneColor || 'Warm Undertone');

  // Determine seasonal color type based on inputs
  const determineColorType = () => {
    if (undertoneColor.includes('Warm')) {
      return 'Warm Autumn';
    } else if (undertoneColor.includes('Cool')) {
      return 'Cool Winter';
    } else if (undertoneColor.includes('Neutral')) {
      return 'Soft Summer';
    } else {
      return 'Warm Autumn'; // Default
    }
  };

  const colorType = determineColorType();

  const handleLookForOutfits = () => {
    // Navigate to outfits screen with current parameters
    navigation.navigate('InspirationScreen');
  };

  return (
    <View style={styles.container}>
      {/* Header with absolutely positioned logo */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="search" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Centered Star Style Logo */}
      <View style={styles.logoWrapper}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../images/header_image.jpeg')}
            style={{ width: 100, height: 50}}
          />
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          // Replace with your image path - ensure it exists
          source={require('../images/profile_avator1.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hello F,</Text>
      </View>

      {/* Color Information Section */}
      <View style={styles.infoSection}>
        {/* Hair Color Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Your Hair Color Is</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={hairColor}
              onValueChange={(value) => setHairColor(value)}
              style={styles.picker}
              dropdownIconColor="#666"
            >
              <Picker.Item label="Black" value="Black" />
              <Picker.Item label="Brown" value="Brown" />
              <Picker.Item label="Blonde" value="Blonde" />
              <Picker.Item label="Red" value="Red" />
              <Picker.Item label="Gray" value="Gray" />
            </Picker>
          </View>
        </View>

        {/* Eye Color Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Your Eye Color Is</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={eyeColor}
              onValueChange={(value) => setEyeColor(value)}
              style={styles.picker}
              dropdownIconColor="#666"
            >
              <Picker.Item label="Brown" value="Brown" />
              <Picker.Item label="Blue" value="Blue" />
              <Picker.Item label="Green" value="Green" />
              <Picker.Item label="Hazel" value="Hazel" />
              <Picker.Item label="Gray" value="Gray" />
            </Picker>
          </View>
        </View>

        {/* Undertone Color Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Your Undertone Color Is</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={undertoneColor}
              onValueChange={(value) => setUndertoneColor(value)}
              style={styles.picker}
              dropdownIconColor="#666"
            >
              <Picker.Item label="Warm Undertone" value="Warm Undertone" />
              <Picker.Item label="Cool Undertone" value="Cool Undertone" />
              <Picker.Item label="Neutral Undertone" value="Neutral Undertone" />
            </Picker>
          </View>
        </View>

        {/* Result Section */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Based On Your Input You Are:</Text>
          <Text style={styles.resultValue}>{colorType}</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleLookForOutfits}
        >
          <Text style={styles.actionButtonText}>Look For Outfits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    zIndex: 0,
  },
  menuButton: {
    padding: 5,
  },
  logoWrapper: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    zIndex: 10,
    marginBottom: 20,
  },
  logoContainer: {
    backgroundColor: '#FFCCFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  logoText: {
    color: '#9932CC',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerRightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd', // Placeholder color
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  infoSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 50,
  },
  resultContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 16,
    color: '#333',
  },
  resultValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9932CC',
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: '#E6CCFF',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default WelcomeScreen;