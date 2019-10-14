import React, {useState} from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const BlogPostForm = ({onSubmit, initialValues})=>{

    const [title, setTitle] = useState(initialValues.title);
    const [body, setBody] = useState(initialValues.body);

    return (
        <View>
            <Text style={styles.label}>Post Title</Text>
            <TextInput style={styles.input} value={title}  onChangeText={text=>setTitle(text)} />
            <Text style={styles.label} >Post Body</Text>
            <TextInput style={styles.input} value={body}  onChangeText={text=>setBody(text)} />
            <Button title="Save Blog Post" onPress={()=> onSubmit(title, body) }
             />
        </View>
    );



};

BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        body:''
    }
}

const styles = StyleSheet.create({
    input:{
        borderColor:'black',
        borderWidth:1,
        fontSize:18,
        marginBottom: 15,
        padding:5,
        margin:5
    },
    label:{
        fontSize:18,
        marginBottom:5,
        marginLeft:5
    }
    

});

export default BlogPostForm;