// Section.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

export default function Section({ title, items })  {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>{title}</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343541',
    marginBottom: 8,
  },
  seeAllButton: {
    alignSelf: 'flex-end',
    marginTop: -24,
    marginRight: 16,
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#343541',
  },
});

