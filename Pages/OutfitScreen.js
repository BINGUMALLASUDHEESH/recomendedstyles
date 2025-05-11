import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const OutfitScreen = ({ navigation, route }) => {
  // Get inspiration ID from previous screen if available
  const { inspirationId } = route.params || {};

  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [buttonOpacity] = useState(new Animated.Value(0));

  // Define outfit types
  const outfitTypes = [
    {
      id: 1,
      name: 'Casual Outfit',
      color: '#FFEB3B', // Yellow color
    },
    {
      id: 2,
      name: 'Formal Outfit',
      color: '#FF80AB', // Pink color
    },
  ];

  // Handle outfit selection
  const handleSelectOutfit = (id) => {
    setSelectedOutfit(id);

    // Animate the button appearance
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  // Handle navigation to next screen
 // Handle navigation to the next screen
const handleNextScreen = () => {
  if (selectedOutfit === 1) {
    navigation.navigate('OutfitDetailsScreen1');
  } else if (selectedOutfit === 2) {
    navigation.navigate('OutfitDetailsScreen2');
  }
};

  return (
    <View style={styles.container}>
      {/* Header with menu, logo, and icons */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.logoWrapper}>
          <View style={styles.logoContainer}>
          <Image
            source={require('../images/header_image.jpeg')}
            style={{ width: 100, height: 50}}
          />          </View>
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
        <Text style={styles.title}>What Type Of Outfits?</Text>

        {/* Outfit Type Grid */}
        <View style={styles.outfitContainer}>
          {outfitTypes.map((outfit) => (
            <TouchableOpacity
              key={outfit.id}
              style={[
                styles.outfitItem,
                { backgroundColor: outfit.color },
                selectedOutfit === outfit.id && styles.selectedOutfitItem
              ]}
              onPress={() => handleSelectOutfit(outfit.id)}
            >
              <View style={styles.outfitLabelContainer}>
                <Text style={styles.outfitName}>{outfit.name}</Text>
              </View>

              {selectedOutfit === outfit.id && (
                <View style={styles.selectedOverlay}>
                  <Feather name="check-circle" size={24} color="#fff" />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Rating Stars */}
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Text
              key={star}
              style={[
                styles.star,
                selectedOutfit && (star <= selectedOutfit) ? styles.starFilled : styles.starEmpty
              ]}
            >
              ★
            </Text>
          ))}
        </View>
      </ScrollView>

      {/* Next button that appears when an item is selected */}
      {selectedOutfit && (
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
    backgroundColor: '#F8F0FF',
    height: 80,
    borderBottomWidth: 0,
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
  logoText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerRightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 16,
    marginTop: 50,
    color: '#333',
    textAlign: 'left',

  },
  outfitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 40,
  },
  outfitItem: {
    width: '45%',
    height:250,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  selectedOutfitItem: {
    borderWidth: 3,
    borderColor: '#9932CC',
    shadowColor: '#9932CC',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  outfitLabelContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 15,
    alignItems: 'center',
  },
  outfitName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#673AB7',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    overflow: 'hidden',
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
    marginVertical: 40,
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

export default OutfitScreen;