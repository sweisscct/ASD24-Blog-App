import { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
import "@/global.css"
export default function Page3() {
  // let textInput: string;
 

  return (
    
    <View className="flex-1 items-center justify-center bg-green">
      <Text>Welcome to the third page</Text>
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View> 
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


