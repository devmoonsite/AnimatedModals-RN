
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import {
	StyleSheet,
	Text,
	View,
	Animated,
	Easing
} from 'react-native'

export default class SplashScreen extends Component {
	constructor () {
		super()
		this.spinValue = new Animated.Value(0)
	}
	componentDidMount () {
		this.spin()
	}
	spin () {
		this.spinValue.setValue(0)
		Animated.timing(
			this.spinValue,
			{
				toValue: 1,
				duration: 5000,
				easing: Easing.linear
			}
		).start(() => this.spin())
	}
	render() {
		const resetAction = NavigationActions.reset({
			index: 0,
			actions: [
				NavigationActions.navigate({ routeName: 'Main'})
			]
		})
		const navigation = this.props.navigation
		const spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg']
		})
		//I used reset so it want be possible for the user to navigate back to Splash screen
		setTimeout(()=>navigation.dispatch(resetAction),3500)

		return (
			<View style={styles.container}>
				
				<Text style={styles.title}>
          			Animated Modals
				</Text>
				<Animated.Image
					style={[styles.logo,{transform: [{rotate: spin}] }]}
					source={require('../../react.png')}
				/>
				<Text style={styles.bottomTitle}>
          Powered by React native
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap:'wrap',
		backgroundColor: '#1a85ff',
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 25,
		color: '#003c80'
	},
	bottomTitle:{
		margin:35,
		fontSize: 15,
		textAlign: 'center',
		color: '#b3d6ff'
	},
	logo:{
		width: 250,
		height: 250
	}
})