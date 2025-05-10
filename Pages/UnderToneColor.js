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

const UnderToneColor = ({ navigation ,route }) => {
    const { hairColor,eyeColor } = route.params;
  const [selectedUndertone, setSelectedUndertone] = useState(null);

  const handleUndertoneSelect = (undertoneId) => {
    setSelectedUndertone(undertoneId);

  };

  const handleNextPress = () => {
    if (selectedUndertone) {
      navigation.navigate('ColorAnalysisResult',{hairColor: hairColor,eyeColor: eyeColor, undertoneColor: selectedUndertone });
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

          <View style={styles.undertoneGrid}>
            {/* Cool Undertone Option */}
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
              <View style={styles.labelContainer}>
                <Text style={styles.undertoneTitle}>Cool Undertone</Text>
                <Text style={styles.undertoneSubtitle}>Blue/Purple Veins</Text>
                <View style={styles.colorDotsContainer}>
                  <View style={[styles.colorDot, { backgroundColor: '#8A64B1' }]} />
                  <View style={[styles.colorDot, { backgroundColor: '#407EC9' }]} />
                </View>
              </View>
            </TouchableOpacity>

            {/* Neutral Undertone Option */}
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
              <View style={styles.labelContainer}>
                <Text style={styles.undertoneTitle}>Neutral Undertone</Text>
                <Text style={styles.undertoneSubtitle}>Blue/Green Veins</Text>
                <View style={styles.colorDotsContainer}>
                  <View style={[styles.colorDot, { backgroundColor: '#407EC9' }]} />
                  <View style={[styles.colorDot, { backgroundColor: '#5AACA4' }]} />
                </View>
              </View>
            </TouchableOpacity>

            {/* Warm Undertone Option */}
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
              <View style={styles.labelContainer}>
                <Text style={styles.undertoneTitle}>Warm Undertone</Text>
                <Text style={styles.undertoneSubtitle}>Green/Olive Veins</Text>
                <View style={styles.colorDotsContainer}>
                  <View style={[styles.colorDot, { backgroundColor: '#5AACA4' }]} />
                  <View style={[styles.colorDot, { backgroundColor: '#B99F7E' }]} />
                </View>
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
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#a0a0a0',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
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
    width: '100%',
    marginBottom: 32,
  },
  undertoneOption: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  selectedOption: {
    borderColor: '#8360c3',
    borderWidth: 2,
  },
  handImage: {
    width: '100%',
    height: 150,
  },
  labelContainer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  undertoneTitle: {
    color: '#8360c3',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  undertoneSubtitle: {
    color: '#9a9a9a',
    fontSize: 12,
    marginBottom: 4,
  },
  colorDotsContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  colorDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 4,
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

export default UnderToneColor;