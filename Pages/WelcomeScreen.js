import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

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
    <SafeAreaView style={styles.safeArea}>
      {/* Header with logo */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image
            source={require('../images/header_image.jpeg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="search" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    height: height * 0.08, // Responsive height
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    zIndex: 1,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
  },
  menuButton: {
    padding: 8,
  },
  logoContainer: {
    backgroundColor: '#FFCCFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.25, // Responsive width
    height: height * 0.025, // Responsive height
  },
  headerRightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: height * 0.03, // Responsive margin
    paddingVertical: 10,
  },
  profileImage: {
    width: width * 0.25, // Responsive width
    height: width * 0.25, // Keep aspect ratio 1:1
    borderRadius: (width * 0.25) / 2, // Half of width for perfect circle
    backgroundColor: '#ddd', // Placeholder color
  },
  greeting: {
    fontSize: Math.min(22, width * 0.055), // Responsive font size with cap
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  infoSection: {
    paddingHorizontal: width * 0.05, // Responsive padding
    marginTop: height * 0.02, // Responsive margin
  },
  pickerContainer: {
    marginBottom: height * 0.02, // Responsive margin
  },
  pickerLabel: {
    fontSize: Math.min(16, width * 0.04), // Responsive font size with cap
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
    height: Platform.OS === 'ios' ? 150 : 50, // Different height for iOS
    maxHeight: height * 0.07, // Cap the height
  },
  resultContainer: {
    marginTop: height * 0.02, // Responsive margin
    marginBottom: height * 0.02, // Responsive margin
  },
  resultLabel: {
    fontSize: Math.min(16, width * 0.04), // Responsive font size with cap
    color: '#333',
  },
  resultValue: {
    fontSize: Math.min(18, width * 0.045), // Responsive font size with cap
    fontWeight: 'bold',
    color: '#9932CC',
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: '#E6CCFF',
    paddingVertical: height * 0.015, // Responsive padding
    borderRadius: 5,
    alignItems: 'center',
    marginTop: height * 0.02, // Responsive margin
    marginBottom: height * 0.03, // Add bottom margin
  },
  actionButtonText: {
    fontSize: Math.min(16, width * 0.04), // Responsive font size with cap
    fontWeight: '600',
    color: '#333',
  },
});

export default WelcomeScreen;