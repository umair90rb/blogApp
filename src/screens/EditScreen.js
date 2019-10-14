import React, {useContext} from 'react';
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from '../contexts/BlogContext';

const EditScreen = ({navigation})=>{
    const id = navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find(blogPost=>blogPost.id===id);

    return <BlogPostForm
        initialValues={{title:blogPost.title, body:blogPost.body}}
        onSubmit={(title, body)=>{
            editBlogPost(id, title, body, ()=>navigation.pop())
        }}
    />
}

const styles = StyleSheet.create({});

export default EditScreen;