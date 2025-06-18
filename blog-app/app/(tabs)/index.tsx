import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';



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
    author: "", 
    title: "", 
    content: ""
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
    <View>
      {posts.map(post => (
      <View key={post.title}>
      <Text>{post.author}</Text>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text>{post.content}</Text>
      </View>
      ))}


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
    // style={styles.postTitle}
    />
        <Text>Content:</Text>
    <TextInput 
    placeholder='Content'
    value={content}
    onChangeText={setContent}
    />
    <Button title="Submit" onPress={addPost}/>
    <Button title="Third Page" onPress={() => router.push("/third_page")}/>
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


