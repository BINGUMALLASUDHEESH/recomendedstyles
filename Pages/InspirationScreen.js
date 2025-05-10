import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

const InspirationScreen = ({ navigation }) => {
  const [selectedInspiration, setSelectedInspiration] = useState(null);
  const [buttonOpacity] = useState(new Animated.Value(0));

  // Define the inspiration items
  const inspirationItems = [
    {
      id: 1,
      name: 'Clueless',
      image: require('../images/image1.jpeg'),
    },
    {
      id: 2,
      name: 'Mean Girls',
      image: require('../images/image2.jpeg'),
    },
    {
      id: 3,
      name: 'Guardians of the Galaxy',
      image: require('../images/image3.jpeg'),
    },
    {
      id: 4,
      name: 'Barbie',
      image: require('../images/image4.jpeg'),
    }
  ];

  // Handle inspiration selection
  const handleSelectInspiration = (id) => {
    setSelectedInspiration(id);

    // Animate the button appearance
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  // Handle navigation to next screen
  const handleNextScreen = () => {
    // Navigate to the next screen with the selected inspiration
    navigation.navigate('OutfitScreen');
  };

  return (
    <View style={styles.container}>
      {/* Header with menu, logo, and icons */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.logoWrapper}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../images/header_image.jpeg')}
              style={{ width: 100, height: 50 }}
            />
          </View>
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

      <ScrollView>
        {/* Title */}
        <Text style={styles.title}>Get Inspired By</Text>

        {/* Inspiration Grid */}
        <View style={styles.gridContainer}>
          <View style={styles.row}>
            {/* First row */}
            <TouchableOpacity
              style={[
                styles.gridItem,
                selectedInspiration === 1 && styles.selectedGridItem
              ]}
              onPress={() => handleSelectInspiration(1)}
            >
              <Image
                source={inspirationItems[0].image}
                style={styles.gridImage}
                resizeMode="cover"
              />
              {selectedInspiration === 1 && (
                <View style={styles.selectedOverlay}>
                  <Feather name="check-circle" size={24} color="#fff" />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.gridItem,
                selectedInspiration === 2 && styles.selectedGridItem
              ]}
              onPress={() => handleSelectInspiration(2)}
            >
              <Image
                source={inspirationItems[1].image}
                style={styles.gridImage}
                resizeMode="cover"
              />
              {selectedInspiration === 2 && (
                <View style={styles.selectedOverlay}>
                  <Feather name="check-circle" size={24} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            {/* Second row */}
            <TouchableOpacity
              style={[
                styles.gridItem,
                selectedInspiration === 3 && styles.selectedGridItem
              ]}
              onPress={() => handleSelectInspiration(3)}
            >
              <Image
                source={inspirationItems[2].image}
                style={styles.gridImage}
                resizeMode="cover"
              />
              {selectedInspiration === 3 && (
                <View style={styles.selectedOverlay}>
                  <Feather name="check-circle" size={24} color="#fff" />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.gridItem,
                selectedInspiration === 4 && styles.selectedGridItem
              ]}
              onPress={() => handleSelectInspiration(4)}
            >
              <Image
                source={inspirationItems[3].image}
                style={styles.gridImage}
                resizeMode="cover"
              />
              {selectedInspiration === 4 && (
                <View style={styles.selectedOverlay}>
                  <Feather name="check-circle" size={24} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Rating Stars */}
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Text
              key={star}
              style={[
                styles.star,
                selectedInspiration && (star <= selectedInspiration) ? styles.starFilled : styles.starEmpty
              ]}
            >
              ★
            </Text>
          ))}
        </View>
      </ScrollView>

      {/* Next button that appears when an item is selected */}
      {selectedInspiration && (
        <Animated.View style={[styles.nextButtonContainer, { opacity: buttonOpacity }]}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextScreen}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Next</Text>
            <Feather name="arrow-right" size={20} color="#fff" style={styles.nextButtonIcon} />
          </TouchableOpacity>
        </Animated.View>
      )}
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
    paddingTop: 40,
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
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  logoContainer: {
    backgroundColor: '#FFCCFF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  headerRightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 16,
    marginTop: 40,
    color: '#333',
  },
  gridContainer: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridItem: {
    width: '48%',
    aspectRatio: 0.7,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedGridItem: {
    borderColor: '#9932CC',
    shadowColor: '#9932CC',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  selectedOverlay: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(153, 50, 204, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  star: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  starFilled: {
    color: '#9932CC',
  },
  starEmpty: {
    color: '#ddd',
  },
  nextButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 100,
  },
  nextButton: {
    backgroundColor: '#9932CC',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  nextButtonIcon: {
    marginLeft: 5,
  }
});

export default InspirationScreen;