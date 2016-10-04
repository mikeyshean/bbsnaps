import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import { ViewContainer } from './components/common';
// import { Actions } from 'react-native-router-flux';

class CreateScreen extends Component {

  takePicture() {
    this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <ViewContainer>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </ViewContainer>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
};

export default CreateScreen;
