import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';


const CartScreen = ({ navigation }) => {
  const { cart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </View>
  );

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigation.navigate('TotalBillScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cartHeader}>Your Cart</Text>
      {cart.length > 0 ? (
        <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id} />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
      {cart.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
  },
  cartHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343541',
    marginTop: 16,
    marginBottom: 16,
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#343541',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
    marginTop: 8,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#343541',
    marginTop: 8,
  },
  checkoutButton: {
    backgroundColor: '#343541',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343541',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CartScreen;
