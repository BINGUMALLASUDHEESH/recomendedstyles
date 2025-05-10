import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const OutfitDetailsScreen1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton}>
              <Feather name="menu" size={24} color="#333" />
            </TouchableOpacity>

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
        <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
          {/* Image Container */}
          <View style={styles.imageContainer}>
            <Image
              source={require('./images/character1.jpeg')}
              style={styles.centeredImage}
              resizeMode="cover"
            />
          </View>

          {/* Content Container */}
          <View style={styles.contentContainer}>
            {/* Left Column */}
            <View style={styles.leftColumn}>
              <View style={styles.imageItem}>
                <Image
                  source={require('./images/top1.jpeg')}
                  style={styles.itemImage}
                resizeMode="cover"

                />
                <Text style={styles.textItemContent}>top1</Text>
              </View>
              <View style={styles.imageItem}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={styles.itemImage}
                />
                <Text style={styles.textItemContent}>top2</Text>
              </View>
            </View>

            {/* Middle Column */}
            <View style={styles.middleColumn}>
              <View style={styles.imageItem}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={styles.itemImage}
                />
                <Text style={styles.textItemContent}>top5</Text>
              </View>
            </View>

            {/* Right Column */}
            <View style={styles.rightColumn}>
              <View style={styles.imageItem}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={styles.itemImage}
                />
                <Text style={styles.textItemContent}>top3</Text>
              </View>
              <View style={styles.imageItem}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={styles.itemImage}
                />
                <Text style={styles.textItemContent}>top4</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Float Button */}
        <TouchableOpacity style={styles.floatButton}>
          <Text style={styles.floatButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    padding: 5,
  },
  headerRightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    marginLeft: 10,
  },
  contentArea: {
    flex: 1,
    paddingTop: 60, // Adjust based on header height
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  centeredImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  leftColumn: {
    width: '30%',
  },
  middleColumn: {
    width: '30%',
  },
  rightColumn: {
    width: '30%',
  },
  imageItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    aspectRatio: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  textItemContent: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  floatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#ffb6e1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  floatButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default OutfitDetailsScreen1;