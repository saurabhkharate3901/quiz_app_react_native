import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

const Product = () => {
  const [products, setProducts] = useState([]); 
  const [isModalVisible, setModalVisible] = useState(false); 
  const [productName, setProductName] = useState('');
  const [editIndex, setEditIndex] = useState(null); 

  const handleAddOrUpdateProduct = () => {
    if (!productName.trim()) {
      Alert.alert('Validation Error', 'Product name cannot be empty');
      return;
    }
    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = productName;
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      setProducts([...products, productName]);
    }
    setProductName('');
    setModalVisible(false);
  };

  const handleEditProduct = (index) => {
    setProductName(products[index]);
    setEditIndex(index);
    setModalVisible(true);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((item, ind) => ind !== index);
    setProducts(updatedProducts);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setProductName('');
            setEditIndex(null);
            setModalVisible(true);
          }}
        >
          <Text style={styles.addButtonText}>Add Product</Text>
        </TouchableOpacity>

        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.productItem}>
              <Text style={styles.productText}>{item}</Text>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEditProduct(index)}
                >
                  <Text style={styles.actionText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteProduct(index)}
                >
                  <Text style={styles.actionText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                placeholder="Enter Product Name"
                value={productName}
                onChangeText={setProductName}
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleAddOrUpdateProduct}
              >
                <Text style={styles.saveButtonText}>
                  {editIndex !== null ? 'Update Product' : 'Add Product'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // paddingTop:50,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productText: {
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    backgroundColor: '#FFC107',
    padding: 8,
    borderRadius: 4,
  },
  deleteButton: {
    backgroundColor: '#DC3545',
    padding: 8,
    borderRadius: 4,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#28A745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Product;
