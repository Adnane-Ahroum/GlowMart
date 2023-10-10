import React, {useContext, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native'
import {CartContext} from './CartContext'

const ProductCard = ({item}) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.productQuantityContainer}>
          <Text style={styles.productQuantityLabel}>Quantity:</Text>
          <Text style={styles.productQuantity}>{item.quantity}</Text>
        </View>
      </View>
    </View>
  )
}

const TotalBillScreen = ({navigation}) => {
  const {cart, clearCart} = useContext(CartContext)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const tax = totalPrice * 0.1
  const totalAmount = totalPrice + tax
  const [showModal, setShowModal] = useState(false)

  const handlePayNow = () => {
    // Clear the cart
    clearCart()

    // Show the success modal
    setShowModal(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Total Bill</Text>
        <View style={{width: 60}} />
      </View>
      {cart.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
      <View style={styles.taxContainer}>
        <Text style={styles.taxLabel}>Tax (10%):</Text>
        <Text style={styles.taxAmount}>${tax.toFixed(2)}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountLabel}>Total Amount:</Text>
        <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Order Placed Successfully!</Text>
          <Text style={styles.modalText}>
            Your order will be delivered in the next 5-6 working days.
          </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              setShowModal(false)
              navigation.navigate('BottomTabs', { screen: 'HomeScreen' })
            }}>
            <Text style={styles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#343541',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  backButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  productCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  productCardImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productCardDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  productCardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
  },
  productCardPrice: {
    fontSize: 16,
    color: '#343541',
    marginTop: 8,
  },
  productCardQuantity: {
    fontSize: 16,
    color: '#343541',
    marginTop: 8,
  },
  productCardSubtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
    marginTop: 8,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
  },
  taxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  taxLabel: {
    fontSize: 14,
    color: '#999999',
  },
  taxAmount: {
    fontSize: 14,
    color: '#999999',
  },
  payNowButton: {
    backgroundColor: '#FF4500',
    borderRadius: 8,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  payNowText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  productDetails: {
    flex: 1,
    padding: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
    marginBottom: 8,
  },
  productQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productQuantityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
    marginRight: 8,
  },
  productQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343541',
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingBottom: 16,
  },
  totalAmountLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#757575',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343541',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343541',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    color: '#343541',
    marginBottom: 24,
  },
  modalButton: {
    backgroundColor: '#343541',
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
})

export default TotalBillScreen
