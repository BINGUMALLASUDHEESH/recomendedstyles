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

const UnderToneColor = ({ navigation, route }) => {
  const { hairColor, eyeColor } = route.params;
  const [selectedUndertone, setSelectedUndertone] = useState(null);

  const handleUndertoneSelect = (undertoneId) => {
    setSelectedUndertone(undertoneId);
  };

  const handleNextPress = () => {
    if (selectedUndertone) {
      navigation.navigate('ColorAnalysisResult', {
        hairColor: hairColor,
        eyeColor: eyeColor,
        undertoneColor: selectedUndertone
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.titleText}>Finish Creating Your Profile</Text>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Choose Your Undertone Color</Text>
          </View>

          {/* Undertone Options in a Single Row */}
          <View style={styles.undertoneGrid}>
            {/* Cool Undertone */}
            <TouchableOpacity
              style={[
                styles.undertoneOption,
                selectedUndertone === 'cool' ? styles.selectedOption : null
              ]}
              onPress={() => handleUndertoneSelect('cool')}
            >
              <Image
                source={require('../images/hand1.jpeg')}
                style={styles.handImage}
                resizeMode="contain"
              />
              <Text style={styles.undertoneTitle}>Cool Undertone</Text>
            </TouchableOpacity>

            {/* Neutral Undertone */}
            <TouchableOpacity
              style={[
                styles.undertoneOption,
                selectedUndertone === 'neutral' ? styles.selectedOption : null
              ]}
              onPress={() => handleUndertoneSelect('neutral')}
            >
              <Image
                source={require('../images/hand2.jpeg')}
                style={styles.handImage}
                resizeMode="contain"
              />
              <Text style={styles.undertoneTitle}>Neutral Undertone</Text>
            </TouchableOpacity>

            {/* Warm Undertone */}
            <TouchableOpacity
              style={[
                styles.undertoneOption,
                selectedUndertone === 'warm' ? styles.selectedOption : null
              ]}
              onPress={() => handleUndertoneSelect('warm')}
            >
              <Image
                source={require('../images/hand3.jpeg')}
                style={styles.handImage}
                resizeMode="contain"
              />
              <Text style={styles.undertoneTitle}>Warm Undertone</Text>
            </TouchableOpacity>
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={[
              styles.nextButton,
              !selectedUndertone && { opacity: 0.5 }
            ]}
            onPress={handleNextPress}
            disabled={!selectedUndertone}
          >
            <Text style={styles.nextButtonText}>Next →</Text>
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
    alignItems: 'center',
    marginTop: 160,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3c3678',
    marginBottom: 32,
    textAlign: 'center',
  },
  sectionTitleContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 24,
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#8360c3',
  },
  undertoneGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  undertoneOption: {
    width: '30%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingVertical: 8,
  },
  selectedOption: {
    borderColor: '#8360c3',
    borderWidth: 2,
  },
  handImage: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  undertoneTitle: {
    color: '#8360c3',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#8360c3',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default UnderToneColor;
