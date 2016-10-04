import React from 'react';
import { View } from 'react-native';

const ViewContainer = ({ children }) =>
      <View style={styles.viewContainer}>
        {children}
      </View>;

const styles = {
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
};

export { ViewContainer };
