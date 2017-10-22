//import library
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/component/common';
import LibraryList from './src/component/LibraryList'

//making a component
const App = () => {
  return (
    <Provider store={createStore(reducers)}>    
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

//making component available to other component
export default App;
