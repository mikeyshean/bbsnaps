import React from 'react';
import { Text } from 'react-native';
import { ViewContainer } from './components/common';
// import { Actions } from 'react-native-router-flux';

const CreateScreen = () => {
  return (
    <ViewContainer>
      <Text
        style={styles.textStyle}
      >
        Create!
      </Text>
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
};

export default CreateScreen;
