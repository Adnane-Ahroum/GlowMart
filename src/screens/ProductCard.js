// ProductCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = (product) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <TouchableOpacity style={styles.productItem} onPress={handlePress}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>      
      <Text style={styles.productPrice}>${product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 16,
    marginBottom: 16,
    padding: 16,
    width: 150,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#343541',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#343541',
    marginTop: 4,
  },
});

export default ProductCard;

