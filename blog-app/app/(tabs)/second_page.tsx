import getData from '@/apis/weather-api';
import { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';

export default function Page2() {
  // let textInput: string;
  getData();

  return (
    <Text>Welcome to the second page</Text>
 
  )
}

const styles = StyleSheet.create({
  postTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  viewStyle: {
    backgroundColor: 'blue'
  }
})


