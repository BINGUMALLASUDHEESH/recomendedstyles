import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const AccessoriesScreen = () => {


    const navigation = useNavigation(); // Use the hook to get access to the navigation prop

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Star Style</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.icon}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Title and Back Button */}
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('OutfitDetailsScreen1')}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Accessories That Will{'\n'}Suit The Fit</Text>

        {/* Main grid layout */}
        <View style={styles.imageGrid}>
          {/* Left column - 2 images */}
          <View style={styles.leftColumn}>
            <View style={styles.productContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require('../assets/accessaries2.png')}
                  style={[styles.image, styles.rotateTiltLeft]}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.imageCaption}>Beige Bag</Text>
            </View>

            <View style={[styles.productContainer, styles.sunglassesContainer]}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require('../assets/footwear10.png')}
                  style={[styles.image, styles.rotateSlightRight]}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.imageCaption}>White Sunglasses</Text>
            </View>
          </View>

          {/* Right column - 3 images */}
          <View style={styles.rightColumn}>
            <View style={styles.productContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require('../assets/footwear7.png')}
                  style={[styles.image, styles.rotateMediumRight]}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.imageCaption}>Gold Jewelries</Text>
            </View>

            <View style={styles.productContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require('../assets/belt4.png')}
                  style={[styles.image, styles.rotateMediumLeft]}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.imageCaption}>Silver Jewelries</Text>
            </View>

            <View style={styles.productContainer}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require('../assets/accessaries1.png')}
                  style={[styles.image, styles.rotateExtraRight]}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.imageCaption}>Statement Necklace</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f2',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  menuIcon: {
    fontSize: 24,
  },
  logo: {
    backgroundColor: '#ffb6e6',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  logoText: {
    fontWeight: 'bold',
    color: '#663366',
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  icon: {
    fontSize: 18,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  backButton: {
    marginBottom: 5,
    padding: 5,
  },
  backArrow: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  imageGrid: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  leftColumn: {
    flex: 1,
    gap: 15,
  },
  rightColumn: {
    flex: 1,
    gap: 15,
  },
  sunglassesContainer: {
    marginTop: 'auto',
  },
  productContainer: {
    marginBottom: 15,
    alignItems: 'center',
  },
  imageWrapper: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '150px',
    height: '150px',
    aspectRatio: 3/2,
  },
  imageCaption: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  // Unique rotation styles for each image
  rotateTiltLeft: {
    transform: [{ rotate: '-37deg' }]
  },
  rotateSlightLeft: {
    transform: [{ rotate: '-23deg' }]
  },
  rotateMediumLeft: {
    transform: [{ rotate: '-50deg' }]
  },
  rotateSlightRight: {
    transform: [{ rotate: '66deg' }]
  },
  rotateMediumRight: {
    transform: [{ rotate: '50deg' }]
  },
  rotateExtraRight: {
    transform: [{ rotate: '35deg' }]
  }
});

export default AccessoriesScreen;