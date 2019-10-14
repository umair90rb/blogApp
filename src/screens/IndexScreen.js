import React, {useContext,useEffect} from 'react';
import { Text, View, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import  { Context } from "../contexts/BlogContext";
import { Feather } from '@expo/vector-icons';



const IndexScreen = ({navigation}) => {

  const {state, addBlogPost, getBlogPost, deleteBlogPost} = useContext(Context);

  
  useEffect(()=>{
    getBlogPost();

    const listener = navigation.addListener('didFocus', ()=>{
      getBlogPost();
    });

    return ()=>{
      listener.remove();
    }
  },[]);

  return (
    <View>
      
    <FlatList
      data={state}
      
      renderItem={({ item })=>{
        return (
          <TouchableOpacity onPress={()=>{navigation.navigate('Show', {id:item.id})}}>
            <View style={styles.row} >
              <Text style={styles.title} >{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}} >
              <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
    />
    </View>
  );
  
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight:(
      <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
        <Feather name="plus" size={30} style={styles.plusIcon}/>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  plusIcon:{
    marginRight:10
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:'grey'
  },
  title:{
    fontSize: 18
  },
  icon:{
    fontSize:24
  }
});

export default IndexScreen;
