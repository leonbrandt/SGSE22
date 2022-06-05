import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

import Header from './components/Header';
import RegisterScreen from './screens/RegisterScreen';
import Card from './components/Card';
import ViewOrder from './screens/ViewOrder';
import NewOrder from './screens/NewOrder';
import OrderListing from './screens/OrderListing';
import MyOrders from './screens/MyOrders';
import Benchmark from './screens/Benchmark';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding" enabled>
      <ScrollView>
        <NewOrder></NewOrder>
        <ViewOrder></ViewOrder>
        <RegisterScreen></RegisterScreen>
        <OrderListing></OrderListing>
        <MyOrders></MyOrders>
        <Benchmark></Benchmark>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});