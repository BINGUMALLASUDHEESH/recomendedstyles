import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Outfit = ({ navigation }) => {
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  const outfitItems = [
    { id: 1, name: 'Casual Outfit', image: require('../images/image1.jpeg') },
    { id: 2, name: 'Formal Outfit', image: require('../images/image2.jpeg') }
  ];

  const handleSelectOutfit = (id) => {
    setSelectedOutfit(id);
  };

  const handleNextPress = () => {
    navigation.navigate('OutfitDetails', { outfitId: selectedOutfit });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>What Type Of Outfits?</Text>

      <View style={styles.outfitContainer}>
        {outfitItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.outfitItem, selectedOutfit === item.id && styles.selectedItem]}
            onPress={() => handleSelectOutfit(item.id)}
          >
            <Image source={item.image} style={styles.outfitImage} />
            <Text style={styles.outfitText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedOutfit && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextButtonText}>Next</Text>
          <Feather name="arrow-right" size={20} color="#fff" style={styles.nextButtonIcon} />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#faf8ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#51456f',
  },
  outfitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  outfitItem: {
    width: '48%',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedItem: {
    borderColor: '#6a1b9a',
    shadowColor: '#6a1b9a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  outfitImage: {
    width: '100%',
    height: 150,
  },
  outfitText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#51456f',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#6a1b9a',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 10,
  },
  nextButtonIcon: {
    marginLeft: 5,
  }
});

export default Outfit;
