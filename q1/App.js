import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ItemList from './src/components/ItemList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ItemList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
