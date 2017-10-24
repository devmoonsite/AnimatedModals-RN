import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated,
  Dimensions
} from 'react-native'
import {screenHeight, modalStyle} from '../modalStyle'
export default class ModalA extends Component {
    state = {
        modalVisible: false,
        valueA: new Animated.Value(0),
      }
      componentDidMount() {
        this.props.onRef(this)
      }
      componentWillUnmount() {
        this.props.onRef(undefined)
      }
      setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
        Animated.sequence([
          Animated.timing(
          this.state.valueA,
          {
            toValue:100,
            duration:800
          }),
          Animated.timing(
            this.state.valueA,
            {
              toValue:200,
              duration:800,
              delay:3000
            })
        ]).start(()=>{this.setState({modalVisible:false}); this.state.valueA.setValue(0)})
      }
      
    render(){
        
        const {valueA} = this.state
        const margin = valueA.interpolate({
          inputRange: [0,100,200],
          outputRange:[-screenHeight,0,screenHeight]
        })
        const opacity = valueA.interpolate({
          inputRange: [0,100,200],
          outputRange:[0,1,0]
        })
        if(this.props.active)
            this.setModalVisible(true)
        return(
            <Modal animationType='fade' transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed."); this.setModalVisible(false)}}>
        <View style={modalStyle.container}>
          <Animated.View style={[modalStyle.popup,{marginTop:margin,opacity:opacity}]}>
            <Text style={modalStyle.text}>
              This is popup A,{'\n'}
              it will close after 3 seconds.
            </Text>
          </Animated.View>
        </View>
        </Modal>
        )
    }
}
