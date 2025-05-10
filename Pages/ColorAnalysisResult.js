import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';

const ColorAnalysisResult = ({ navigation,route  }) => {

const { hairColor,eyeColor,undertoneColor } = route.params;



  const handleNextPress = () => {
    navigation.navigate('Welcome',{hairColor: hairColor,eyeColor: eyeColor,undertoneColor: undertoneColor});
  };

  const leftColumnColors = [
    ['#f8f4d8', '#4b0d0b', '#c4300c', '#f9a602', '#b09a17'],
    ['#677b0d', '#1d3a22', '#a45344', '#4c5b28', '#aa0000']
  ];

  const rightColumnColors = [
    ['#4b612c', '#9e2a2b'],
    ['#e66565', '#ffc107']
  ];

  const renderColorGrid = (colors, isLeft) =>
    colors.map((row, rowIndex) => (
      <View
        key={rowIndex}
        style={[
          styles.colorRow,
          isLeft ? styles.leftColorRow : styles.rightColorRow
        ]}
      >
        {row.map((color, colIndex) => (
          <View
            key={colIndex}
            style={[
              styles.colorSwatch,
              {
                backgroundColor: color,
                width: isLeft ? 25 : 50,
                height: isLeft ? 50: 50
              }
            ]}
          />
        ))}
      </View>
    ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.titleText}>Color Analysis</Text>
          <Text style={styles.subtitleText}>Results</Text>

          <View style={styles.sectionDivider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Warm Autumn</Text>
            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.guideText}>Seasonal Colour Analysis Guide</Text>

          <View style={styles.photoContainer}>
            <Image
              source={require('../images/brown_eye.jpeg')}
              style={styles.personPhoto}
            />
            <Image
              source={require('../images/blue_eye.jpeg')}
              style={styles.personPhoto}
            />
          </View>

          <View style={styles.sectionDivider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Your Best Colours</Text>
            <View style={styles.dividerLine} />
          </View>

         <View style={styles.colorPaletteContainer}>
            <View style={styles.colorColumn}>
              {renderColorGrid(leftColumnColors, true)}
            </View>
            <View style={[styles.colorColumn, { marginRight: -10 }]}>
              {renderColorGrid(rightColumnColors, false)}
            </View>
          </View>

          <Text style={styles.websiteText}>robertastylelee.co.uk</Text>

          <View style={styles.progressIndicator}>
            <Text style={styles.progressDot}>★</Text>
            <Text style={styles.progressDot}>✿</Text>
            <Text style={styles.progressDot}>★</Text>
            <Text style={styles.progressDot}>✿</Text>
            <Text style={styles.progressDot}>★</Text>
          </View>

          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
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
    padding: 20,
    marginTop:80,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#51456f',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#51456f',
    marginBottom: 15,
    textAlign: 'center',
  },
  pinterestIcon: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  sectionDivider: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#aaa',
  },
  dividerText: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  guideText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  personPhoto: {
    width: '48%',
    height: 120,
    borderRadius: 2,
  },
    colorPaletteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },
  colorColumn: {
    flex: 1,
    marginHorizontal: 5,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  rightColorRow: {
    justifyContent: 'space-evenly',
  },
  colorSwatch: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  websiteText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 15,
    textAlign: 'center',
  },
  progressIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  progressDot: {
    fontSize: 18,
    color: '#c4c4f7',
    marginHorizontal: 4,
  },
  nextButton: {
    backgroundColor: '#c4c4f7',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 24,
    color: '#383863',
    fontWeight: '500',
  },
});

export default ColorAnalysisResult;