import React, {useContext} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { Context } from "../contexts/BlogContext";
import { Feather } from '@expo/vector-icons';
const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);

    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'));

    console.log(blogPost);
    return  (
        <View style={styles.view}>
            <Text style={styles.text}>{blogPost.title}</Text>
            <Text style={styles.text}>{blogPost.body}</Text>
        </View>
    );
}


ShowScreen.navigationOptions = ({navigation}) => {
    return {
      headerRight:(
        <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id: navigation.getParam('id')})}>
          <Feather name="edit-3" size={30} style={styles.icon}/>
        </TouchableOpacity>
      )
    };
  };

const styles = StyleSheet.create({
    icon:{
        marginRight:10
      },

    text:{
        borderBottomColor:'black',
        
    },
    view:{
        margin:5,
        padding:5
    }
});

export default ShowScreen;