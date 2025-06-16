import { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
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
 

  // async function addPost() {

  // }

  const addPost = async () => {
    if (!author || !title || !content) return;
    const newPost = {author, title, content}
    setPosts([newPost, ...posts]);
    setAuthor("");
    setTitle("");
    setContent("");
  }


  return (
    <div>
      {posts.map(post => (
      <div style={styles.postTitle}>
      <Text>{post.author}</Text>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text>{post.content}</Text>
      </div>
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
    </div>
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


