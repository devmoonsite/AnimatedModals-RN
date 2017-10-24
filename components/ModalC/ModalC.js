import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Animated,
  Dimensions,
  Button
} from 'react-native';
import {RoundedButton} from '..'
import {screenHeight, modalStyle} from '../modalStyle'
export default class ModalC extends Component {
    state = {
        modalVisible: false,
        valueC: new Animated.Value(0)
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
          this.state.valueC,
          {
            toValue:100,
            duration:800
          }).start()
      }
      setModalInvisible = () => {
        Animated.timing(
          this.state.valueC,
          {
            toValue:200,
            duration:800
          }).start(()=>{this.setState({modalVisible:false}); this.state.valueC.setValue(0)})
      }
      
    render(){
        
        let {valueC} = this.state,
        margin = valueC.interpolate({
          inputRange: [0,100,200],
          outputRange:[-screenHeight,0,screenHeight]
        }),
        opacity = valueC.interpolate({
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
                  This is popup C{'\n'}
                  just press the close button to close this popup
                </Text>
                <RoundedButton onPress={()=>this.setModalInvisible()} title='close'/>
              </Animated.View>
            </View>
          </Modal>
        )
    }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  popUp:{
    width:250,
    height:200,
    borderRadius:10, 
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center'
  },
  text:{
    alignSelf:'center',
    textAlign:'center',
    fontSize:20,
   
  }
})