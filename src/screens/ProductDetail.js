import React, { useState,useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';
import Section from './Section';
const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <View style={styles.productSpecsContainer}>
        <Text style={styles.productSpecs}>Wattage: {product.wattage}W</Text>
        <Text style={styles.productSpecs}>
          Color Temperature: {product.colorTemperature}
        </Text>
        <Text style={styles.productSpecs}>Lumens: {product.lumens}lm</Text>
        <Text style={styles.productSpecs}>Rating: {product.rating}★</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={decrementQuantity}
        >
           <Text style={{...styles.quantityText,color : "#fff"}}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={incrementQuantity}
        >
          <Text style={{...styles.quantityText,color : "#fff"}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addToCartContainer}>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

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
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343541',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343541',
    marginTop: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#343541',
    marginTop: 16,
    marginBottom: 16,
  },
  productSpecsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
  productSpecs: {
    fontSize: 16,
    color: '#343541',
marginBottom: 8,
},
quantityContainer: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginTop: 16,
marginBottom: 16,
},
quantityButton: {
backgroundColor: '#343541',
borderRadius: 8,
width: 40,
height: 40,
justifyContent: 'center',
alignItems: 'center',
},
quantityText: {
fontSize: 20,
fontWeight: 'bold',
color: '#343541',
marginHorizontal: 16,
},
addToCartContainer: {
marginTop: 24,
marginBottom: 16,
},
addToCartButton: {
backgroundColor: '#343541',
borderRadius: 8,
padding: 16,
},
addToCartText: {
fontSize: 16,
fontWeight: 'bold',
color: '#FFFFFF',
textAlign: 'center',
},
});

export default ProductDetail;