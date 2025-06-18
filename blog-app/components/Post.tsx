import { View, Text } from 'react-native'
import React from 'react'
import indexStyles from '@/app/(tabs)/index-styles'

const Post = (props: {post: {title: String, author: String, content: String}}) => {
  return (
      <View>
      <Text>{props.post.author}</Text>
      <Text style={indexStyles.postTitle}>{props.post.title}</Text>
      <Text>{props.post.content}</Text>
      </View>
  )
}

export default Post