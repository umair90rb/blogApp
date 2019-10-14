import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Context } from "../contexts/BlogContext";
import  BlogPostForm from "../components/BlogPostForm";
const CreateScreen = ({ navigation }) => {


    const { addBlogPost } = useContext(Context);

    return <BlogPostForm 
        onSubmit={(title, body)=>{
            addBlogPost(title, body, ()=>navigation.navigate('Home'))
        }} 
    />
    
}

const styles = StyleSheet.create({});

export default CreateScreen;