import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

const HairColorOption = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (colorId) => {
    setSelectedColor(colorId);

  };

  const handleNextPress = () => {
    if (selectedColor) {
    navigation.navigate('EyeColorOption', { hairColor: selectedColor });
 }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.headerText}>Finish Creating Your Profile</Text>

          <Text style={styles.sectionTitle}>Choose Your Hair Color</Text>

          <View style={styles.colorGrid}>
            {/* Black Hair Option */}
            <TouchableOpacity
              style={[
                styles.colorOption,
                selectedColor === 'black' ? styles.selectedOption : null
              ]}
              onPress={() => handleColorSelect('black')}
            >
              <Image
                source={require('../images/black_hair.jpeg')}
                style={styles.hairImage}
              />
              <View style={styles.colorLabel}>
                <Text style={styles.colorText}>Black</Text>
              </View>
            </TouchableOpacity>

            {/* Light Copper Brown Hair Option */}
            <TouchableOpacity
              style={[
                styles.colorOption,
                selectedColor === 'copper' ? styles.selectedOption : null
              ]}
              onPress={() => handleColorSelect('copper')}
            >
              <Image
                source={require('../images/light_copper_brown_hair.jpeg')}
                style={styles.hairImage}
              />
              <View style={styles.colorLabel}>
                <Text style={styles.colorText}>Light Copper Brown</Text>
              </View>
            </TouchableOpacity>

            {/* Dark Brown Hair Option */}
            <TouchableOpacity
              style={[
                styles.colorOption,
                selectedColor === 'darkbrown' ? styles.selectedOption : null
              ]}
              onPress={() => handleColorSelect('darkbrown')}
            >
              <Image
                source={require('../images/dark_brown_hair.jpeg')}
                style={styles.hairImage}
              />
              <View style={styles.colorLabel}>
                <Text style={styles.colorText}>Dark Brown</Text>
              </View>
            </TouchableOpacity>

            {/* Blonde Hair Option */}
            <TouchableOpacity
              style={[
                styles.colorOption,
                selectedColor === 'blonde' ? styles.selectedOption : null
              ]}
              onPress={() => handleColorSelect('blonde')}
            >
              <Image
                source={require('../images/blonde_hair.jpeg')}
                style={styles.hairImage}
              />
              <View style={styles.colorLabel}>
                <Text style={styles.colorText}>Blonde</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.progressIndicator}>
            <Text style={styles.progressDot}>★</Text>
            <Text style={styles.progressDot}>✿</Text>
            <Text style={styles.progressDot}>★</Text>
            <Text style={styles.progressDot}>✿</Text>
            <Text style={styles.progressDot}>★</Text>
            <Text style={styles.progressDot}>✿</Text>
          </View>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextPress}
          >
            <Text style={styles.nextButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#383863',
    marginBottom: 32,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#8360c3',
    alignSelf: 'stretch',
    marginBottom: 12,
    textAlign: 'center',
  },
  colorGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  colorOption: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedOption: {
    borderColor: '#8360c3',
    borderWidth: 2,
  },
  hairImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  colorLabel: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  colorText: {
    color: '#8360c3',
  },
  progressIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  progressDot: {
    fontSize: 20,
    color: '#c4c4f7',
    marginHorizontal: 4,
  },
  nextButton: {
    backgroundColor: '#c4c4f7',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 24,
    color: '#383863',
  },
});

export default HairColorOption;