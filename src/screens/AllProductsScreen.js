import React, {useState, useContext} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'
import {CartContext} from './CartContext'
import allProducts from './allProducts'

const AllProductsScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const {addToCart} = useContext(CartContext)

  const handleSearch = text => {
    setSearchQuery(text)
  }

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.product}
      onPress={() => navigation.navigate('ProductDetail', {product: item})}>
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={{uri: item.image}} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder='Search for products'
          placeholderTextColor='#999'
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      {filteredProducts.length === 0 ? (
        <View style={styles.noProductsContainer}>
          <Text style={styles.noProductsText}>No products found.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
  },
  backButton: {
    marginTop: 16,
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#343541',
  },
  searchBarContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  searchBar: {
    height: 40,
  },
  product: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  productImageContainer: {
    flex: 1,
  },
  productImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 2,
    marginLeft: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#343541',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
    marginTop: 8,
  },
  noProductsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noProductsText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343541',
  },
});


export default AllProductsScreen;
