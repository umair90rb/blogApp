import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from "./src/contexts/BlogContext";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
    Home: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Blogers'
    }
  }
);

const App = createAppContainer(navigator);

export default ()=>{
  return( 
    <Provider>
      <App/>
    </Provider>
  );
}
