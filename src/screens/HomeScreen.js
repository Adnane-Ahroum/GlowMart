import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Section from './Section';
import ProductCard from './ProductCard';
import popularProducts from './popularProducts';
import allProducts from './allProducts';

const swiperImages = [
  {
    id: '1',
    title: 'Smart LED Bulb',
    image: require('../assets/images/simg1.jpg'),
    description:
      'WiFi-enabled LED bulb with app control, compatible with Alexa and Google Assistant.',
  },
  {
    id: '2',
    title: 'Outdoor Flood Light',
    image: require('../assets/images/simg2.jpg'),
    description:
      'High-intensity LED flood light with motion sensor, perfect for outdoor security lighting.',
  },
  {
    id: '3',
    title: 'Smart Ceiling Light',
    image: require('../assets/images/simg3.jpg'),
    description:
      'WiFi-enabled smart ceiling light with adjustable color temperature and brightness, compatible with Alexa and Google Assistant.',
  },
];

export default function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = text => {
    setSearchQuery(text);
  };

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const showProducts = searchQuery === '' || filteredProducts.length > 0;
  const handleSeeAll = () => {
    navigation.navigate('AllProductsScreen', {allProducts});
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for products"
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {showProducts && (
        <>
          <Swiper
            style={styles.swiper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={3}
            activeDotColor="#343541"
            dotStyle={{
              backgroundColor: '#FFF',
              borderWidth: 1,
              borderColor: '#343541',
              margin: 3,
            }}
            activeDotStyle={{
              backgroundColor: '#343541',
              borderWidth: 1,
              borderColor: '#343541',
              margin: 3,
            }}>
            {swiperImages.map(item => (
              <View style={styles.swiperItem} key={item.id}>
                <Image style={styles.swiperImage} source={item.image} />
                <View style={styles.swiperContent}>
                  <Text style={styles.swiperTitle}>{item.title}</Text>
                  <Text style={styles.swiperDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </Swiper>
          <Section title="Popular Products" items={popularProducts} />
          <Section title="All Products" items={filteredProducts} />
          <TouchableOpacity style={styles.seeAllButton} onPress={handleSeeAll}>
            <Text style={styles.seeAllButtonText}>See All</Text>
          </TouchableOpacity>
        </>
      )}
      {!showProducts && (
        <Text style={styles.noProductsText}>No products found.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  swiper: {
    height: 200,
    marginBottom: 24,
  },
  swiperItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  swiperContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  swiperTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  swiperDescription: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
  noProductsText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343541',
  },
  seeAllButton: {
    backgroundColor: '#343541',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
  },
  seeAllButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
