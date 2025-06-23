import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import indexStyles from '@/app/(tabs)/index-styles'
// import reactLogo from ;

const Post = (props: {post: {title: String, author: String, content: String}}) => {
  return (
      <View className='flex-1 justify-center items-center mb-5 border-solid border-purple-600 border-4 rounded-xl bg-gray-300 p-1 m-4 flex-4'>
        {/* <ImageBackground
            source={require("@/assets/images/react-logo.png")}
            className='flex-1'
            resizeMode='cover'
        > */}
      <Text className='mb-5 text-lg font-bold text-purple-400'>{props.post.title}</Text>
      {/* </ImageBackground> */}
      <Text>{props.post.content}</Text>
      <Text>{props.post.author}</Text>
      </View>
  )
}

export default Post