import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import reducers from './reducers';
import CreateScreen from './CreateScreen';
import HomeScreen from './HomeScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'white' }}>{title}</Text>
  );
};

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{ backgroundColor: 'black' }}
          >
            <Scene key="home" title="HOME" icon={TabIcon}>
              <Scene
                key="black"
                component={HomeScreen}
                title="Home"
                initial
              />
            </Scene>
            <Scene key="create-tab" title="CREATE" icon={TabIcon}>
              <Scene
                key="create-photos"
                component={CreateScreen}
                title="Create"
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
