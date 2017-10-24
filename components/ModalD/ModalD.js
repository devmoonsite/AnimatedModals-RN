import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated,
  Easing,
  Dimensions,
  Button
} from 'react-native'
import {RoundedButton} from '..'
import {screenHeight, modalStyle} from '../modalStyle'
export default class ModalD extends Component {
  constructor(props){
    super(props)
    this.spinAnimation = Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  }
    state = {
        modalVisible: false,
        valueD: new Animated.Value(0),
        spinValue: new Animated.Value(0),
        shouldSpin: false

      }
      componentDidMount() {
        this.props.onRef(this)
      }
      componentWillUnmount() {
        this.props.onRef(undefined)
      }
      setModalVisible = (visible) => {
        this.setState({modalVisible: visible, shouldSpin:false});
        
          Animated.timing(
          this.state.valueD,
          {
            toValue:100,
            duration:800
          }).start(()=>{
            this.setState({shouldSpin:true})
            this.startSpin()
          })
      }
      setModalInvisible = () => {
        Animated.timing(
          this.state.valueD,
          {
            toValue:200,
            duration:800
          }).start(()=>{
            this.setState({modalVisible:false,})
            this.state.valueD.setValue(0)})
      }

      startSpin = () => {
        this.state.spinValue.setValue(0)
        this.spinAnimation.start(() => {
            if(this.state.shouldSpin) 
              this.startSpin()
          })
        
      }
      stopSpin = () => {
        this.setState({shouldSpin:false})
        this.state.spinValue.setValue(0)
        this.spinAnimation.stop()
        this.setModalInvisible()
      }
      
    render(){
        
        let {valueD, spinValue} = this.state,
        margin = valueD.interpolate({
          inputRange: [0,100,200],
          outputRange:[-screenHeight,0,screenHeight]
        }),
        opacity = valueD.interpolate({
          inputRange: [0,100,200],
          outputRange:[0,1,0]
        }),
        spin = this.state.shouldSpin ? spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg','360deg']
        }) : '0deg'
        return(
          <Modal animationType='fade' transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed."); this.setModalVisible(false)}}>
            <View style={modalStyle.container}>
              <Animated.View style={[modalStyle.popup,{marginTop:margin,opacity:opacity}]}>
                <Text style={modalStyle.text}>
                This is popup D
              </Text>
              <Animated.View style={[modalStyle.spinner,{transform:[{rotate: spin}]}]} />
              <RoundedButton onPress={()=>this.stopSpin()} title='close'/>
            </Animated.View>
          </View>
        </Modal>
        )
    }
}
