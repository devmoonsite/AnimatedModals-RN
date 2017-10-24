import React , {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class ModalButton extends Component {
    render(){

        return(
            <TouchableOpacity onPress={this.props.onPress} style={style.button}>
                
                
                    <Text style={style.letter}>
                        {this.props.letter}
                    </Text>
              
                
                </TouchableOpacity>
        )
    }
}
const style = StyleSheet.create({
    button: {
        margin:20,
        width: 80,
        height: 80,
        borderRadius:40,
        backgroundColor: '#1a85ff',
        justifyContent:'center',
        alignItems:'center'
    },
    letter:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#cce4ff'
        

    }
})