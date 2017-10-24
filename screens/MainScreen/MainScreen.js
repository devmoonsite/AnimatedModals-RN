
import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Modal,
	Animated,
	Dimensions
} from 'react-native'
import {
	ModalButton,
	ModalA,
	ModalB,
	ModalC,
	ModalD
} from '../../components'

export default class MainScreen extends Component {
   
	render() {
		return (
			<View style={styles.container}>
				<ModalA onRef={ref => (this.modalA = ref)}/>
				<ModalB onRef={ref => (this.modalB = ref)}/>
				<ModalC onRef={ref => (this.modalC = ref)}/>
				<ModalD onRef={ref => (this.modalD = ref)}/>
				<Text style={styles.title}>
          			Click one of the buttons below
				</Text>
				<View style={styles.buttonsContainer}>
					<ModalButton onPress={() => {this.modalA.setModalVisible(true)}} letter='A'/>
					<ModalButton onPress={() => {this.modalB.setModalVisible(true)}} letter='B'/>
					<ModalButton onPress={() => {this.modalC.setModalVisible(true)}} letter='C'/>
					<ModalButton onPress={() => {this.modalD.setModalVisible(true)}} letter='D'/>
				</View>
				<Text style={[styles.title, styles.titleBottom]}>
          			created by Omri Himelbrand
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#cce4ff',
	},
	buttonsContainer: {
		width: 250,
		height: 250,
		flexDirection: 'row',
		justifyContent:'space-around',
		alignItems: 'center',
		flexWrap:'wrap',
    
	},
	title: {
		fontSize: 25,
		alignSelf: 'center',
		color:'#001833'
	},
	titleBottom: {
		fontSize: 15
	},
})