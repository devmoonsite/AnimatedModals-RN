import {StyleSheet, Dimensions} from 'react-native'

const screenHeight = Dimensions.get('window').height

const modalStyle = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'rgba(0,0,0,0.5)',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	popup:{
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
		margin:5
	},
	textInput:{
		textAlign:'center',
		width:70,
		fontSize:30
  },
  spinner:{
    margin:15,
    width:50,
    height:50,
    backgroundColor:'red',
  }
})
export {
	screenHeight,
	modalStyle
}