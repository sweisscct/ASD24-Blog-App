import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import indexStyles from '@/app/(tabs)/index-styles'
// import reactLogo from ;

const Post = (props: {post: {title: String, author: String, content: String}}) => {
  return (
      <View>
        <ImageBackground
            source={{uri: "@/assets/images/react-logo.png"}}
            className='flex-1'
            resizeMode='cover'
        >
      <Text>{props.post.author}</Text>
      </ImageBackground>
      <Text style={indexStyles.postTitle}>{props.post.title}</Text>
      <Text>{props.post.content}</Text>
        

      </View>
  )
}

export default Post