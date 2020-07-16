import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import PhotoList from './src/ui/PhotoList';

export default function App() {
  return (
    <Provider store={store}>
      <PhotoList />
    </Provider>
  );
}
