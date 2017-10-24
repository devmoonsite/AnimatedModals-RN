import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated,
  TextInput,
  Dimensions,
  Button
} from 'react-native';
import {RoundedButton} from '..'
import {screenHeight, modalStyle} from '../modalStyle'
export default class ModalB extends Component {
    state = {
        modalVisible: false,
        valueB: new Animated.Value(0),
        delay: 0
      }
      componentDidMount() {
        this.props.onRef(this)
      }
      componentWillUnmount() {
        this.props.onRef(undefined)
      }
      setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
        
          Animated.timing(
          this.state.valueB,
          {
            toValue:100,
            duration:800
          }).start()
      }
      setModalInvisible = () => {
        Animated.timing(
          this.state.valueB,
          {
            toValue:200,
            duration:800,
            delay:this.state.delay*1000
          }).start(()=>{this.setState({modalVisible:false,delay:0}); this.state.valueB.setValue(0)})
      }
      
    render(){
        
        const {valueB} = this.state
        const margin = valueB.interpolate({
          inputRange: [0,100,200],
          outputRange:[-screenHeight,0,screenHeight]
        })
        const opacity = valueB.interpolate({
          inputRange: [0,100,200],
          outputRange:[0,1,0]
        })
        return(
          <Modal animationType='fade' transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed."); this.setModalVisible(false)}}>
        <View style={modalStyle.container}>
          <Animated.View style={[modalStyle.popup,{marginTop:margin,opacity:opacity}]}>
            <Text style={modalStyle.text}>
              This is popup B{'\n'}
              Enter delay in seconds
            </Text>
            <TextInput onChangeText={text => this.setState({delay: parseInt(text)})} keyboardType='numeric' returnKeyType='done' placeholder='0' style={modalStyle.textInput}/>
            
            <RoundedButton onPress={()=>this.setModalInvisible()} title='submit'/>
          </Animated.View>
        </View>
        </Modal>
        )
    }
}
