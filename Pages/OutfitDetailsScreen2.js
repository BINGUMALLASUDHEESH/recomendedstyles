import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OutfitDetailsScreen2 = () => {

    const navigation = useNavigation();


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Feather name="menu" size={24} color="#333" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            {/* Centered image */}
            <Image
              source={require('../assets/header_image.png')}
              style={{ width: 135, height: 55 }}
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
      </View>

      {/* Content Area */}
      <ScrollView style={styles.scrollContainer}>
        {/* Back button and title */}
        <View style={styles.backTitleContainer}>
  <TouchableOpacity onPress={() => navigation.navigate('OutfitScreen')}>
    <Feather name="arrow-left" size={24} color="#666" />
  </TouchableOpacity>
</View>


        {/* Main outfit image */}
        <View style={styles.mainImageContainer}>
          <View style={styles.imageWrapper}>
            {/* Text on the left side */}
            <View style={styles.textContainer}>
              <Text style={styles.outfitTitle}>Cher Horowitz:</Text>
              <Text style={styles.outfitSubtitle}>CLUELESS OUTFIT</Text>
            </View>

            {/* Main image in the center */}
            <Image
              source={require('../assets/main31.png')}
              style={styles.mainImage}
            />

            <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.navigate('AccessoriesScreen2')}  // Navigate on press
      >
        <Feather name="arrow-right" size={18} color="white" />
      </TouchableOpacity>
          </View>
        </View>

        {/* Outfit accessories section */}
        <View style={styles.accessoriesContainer}>
          <View style={styles.accessoriesHeader}>
            <Text style={styles.accessoriesTitle}>Best Accessories for this Outfit</Text>
          </View>
        </View>

        {/* Accessory images */}
        <View style={styles.accessoriesRow}>
          <View style={styles.accessoryItem}>
            <Image
              source={require('../assets/top6.png')}
              style={styles.accessoryImage}
            />
          </View>
          <View style={styles.accessoryItem}>
            <Image
              source={require('../assets/top9.png')}
style={[styles.accessoryImage, { transform: [{ rotate: '-20deg' }] }]}
            />
          </View>
        </View>

        <View style={styles.centerAccessoryRow}>
          <View style={styles.accessoryItem}>
            <Image
              source={require('../assets/top12.png')}
              style={styles.accessoryImage}
            />
          </View>
        </View>

        <View style={styles.accessoriesRow}>
          <View style={styles.accessoryItem}>
            <Image
              source={require('../assets/pant6.png')}
              style={[styles.accessoryImage, { transform: [{ rotate: '-50deg' }], height: 200, width: 150 }]}
            />
          </View>
          <View style={styles.accessoryItem}>
            <Image
              source={require('../assets/pant12.png')}
              style={[styles.accessoryImage, { transform: [{ rotate: '45deg' }], height: 190, width: 150 }]}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 16,
    paddingTop: 30,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: 'white',
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuButton: {
    padding: 4,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // Remove flex: 1 to prevent taking the full width
  },
  headerRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
    padding: 4,
  },
  scrollContainer: {
    flex: 1,
  },
  backTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  outfitTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444',
  },
  outfitSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f1c232',
  },
  mainImageContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  mainImage: {
    width: 250,
    height: 350,
    resizeMode: 'contain',
  },
  textContainer: {
    position: 'absolute',
    top: 5,
    left: 0,
    alignItems: 'flex-start',
    zIndex: 2,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#fbd5e0',
    borderRadius: 20,
    padding: 8,
  },
  accessoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  accessoriesHeader: {
    backgroundColor: '#f3e5f5',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  accessoriesTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4a148c',
  },
  accessoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  centerAccessoryRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 3,
    marginBottom: 1,
  },
  accessoryItem: {
    width: '45%',
  },
  accessoryImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
});

export default OutfitDetailsScreen2;
