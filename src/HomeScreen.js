import React from 'react';
// import { Actions } from 'react-native-router-flux';
import { ViewContainer, Header } from './components/common';
import LibraryList from './components/LibraryList';

const HomeScreen = () => {
  return (
    <ViewContainer>
      <Header text="Home" />
      <LibraryList />
    </ViewContainer>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
}

export default HomeScreen;
