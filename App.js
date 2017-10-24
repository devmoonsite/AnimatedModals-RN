
import React, { Component } from 'react'
import { Easing, Animated } from 'react-native'
import { StackNavigator } from 'react-navigation'
import {MainScreen, SplashScreen} from './screens'

const Navigator = StackNavigator(
	{
		Splash: {screen: SplashScreen},
		Main: {screen: MainScreen}
	},
	{
		headerMode: 'none'
	}
)
export default class App extends Component {
	render() {
		return (
			<Navigator />
		)
	}
}

