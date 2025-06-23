import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View, Image, FlatList, ScrollView } from 'react-native';

import "@/global.css"
import indexStyles from './index-styles';
import Post from '@/components/Post';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  const router = useRouter();

  // let textInput: string;
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState({
    author: "", 
    title: "",
    content: ""
  });

  const [posts, setPosts] = useState([{
    author: "Default Author", 
    title: "Unoriginal Title", 
    content: "Boring content"
  }]);
 

    const loadPosts = async () => {
    (await AsyncStorage.getAllKeys()).forEach(async key => {
      let newPostString = await AsyncStorage.getItem(key);
      if (newPostString) {
        const newPost = JSON.parse(newPostString);
        setPosts([...posts, newPost]);
      }
    })
    }

  // loadPosts();


  // async function addPost() {

  // }

  const addPost = async () => {
    if (!author || !title || !content) return;
    const newPost = {author, title, content}
    setPosts([newPost, ...posts]);
    await AsyncStorage.setItem(title, JSON.stringify(newPost));
    setAuthor("");
    setTitle("");
    setContent("");
  }


  return (
    <ScrollView>
<View>


    <Text>Author:</Text>
    <TextInput 
    placeholder='Author'
    value={author}
    onChangeText={setAuthor}
    />
    <Text>Title:</Text>
    <TextInput 
    placeholder='Title'
    value={title}
    onChangeText={setTitle}
    style={indexStyles.postTitle}
    />
        <Text>Content:</Text>
    <TextInput 
    placeholder='Content'
    value={content}
    onChangeText={setContent}
    />
    <View>
      <Image source={require("@/assets/images/react-logo.png")}/>
    </View>
    <Button title="Submit" onPress={addPost}/>
    <Button title="Third Page" onPress={() => router.push("/third_page")}/>

    <FlatList
    data={posts}
    renderItem={( {item} ) => (
      <Post post={item}></Post>
    )}
    ItemSeparatorComponent={() => <View className="w-4"/>}
    className='flex-1'
    >

    </FlatList>
      {/* {posts.map(post => (
        <Post post={post}></Post>
      ))}       */}

    </View>
        </ScrollView>
  )
}




