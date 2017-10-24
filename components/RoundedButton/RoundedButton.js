import React , {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class RoundedButton extends Component {
	render(){

		return(
			<TouchableOpacity onPress={this.props.onPress} style={style.button}>               
				<Text style={style.text}>
					{this.props.title}
				</Text>
			</TouchableOpacity>
		)
	}
}
const style = StyleSheet.create({
	button: {
		width: 80,
		height: 40,
		borderRadius:10,
		backgroundColor: '#1a85ff',
		justifyContent:'center',
		alignItems:'center'

	},
	text:{
		fontSize: 20,
		color:'#ffffcc'
        

	}
})