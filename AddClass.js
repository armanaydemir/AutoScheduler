/**
 * AddClass.js (component to add desired class to schedule builder)
 * December 23, 2016
 * Arman(dowski) Aydemir
 */

 //init --------------------------------
'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ListView,
  ActivityIndicator,
  Image,
  Platform,
  Switch
} from 'react-native';
//---------------------------------------

var styles = StyleSheet.create({
	description: {
    	marginBottom: 20,
    	fontSize: 18,
    	textAlign: 'center',
    	color: '#656565'
  	},
	container: {
    	padding: 30,
    	marginTop: 65,
    	alignItems: 'center'
  	},
	flowRight: {	
		flexDirection: 'row',
  		alignItems: 'center',
  		alignSelf: 'stretch'
  	},
	buttonText: {
	  fontSize: 18,
	  color: 'white',
	  alignSelf: 'center'
	},
	button: {
	  height: 36,
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: '#036632',
	  borderColor: '#036632',
	  borderWidth: 1,
	  borderRadius: 8,
	  marginBottom: 10,
	  alignSelf: 'stretch',
	  justifyContent: 'center'
	},
	searchInput: {
	  height: 36,
	  padding: 4,
	  marginRight: 5,
	  flex: 4,
	  fontSize: 18,
	  borderWidth: 1,
	  borderColor: '#036632',
	  borderRadius: 8,
	  color: '#036632'
	}
});

class AddClass extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
    	searchString: 'Chemistry 101',
    	creditsString: '3',
    	switchIsOn: false
  	};
  }
  onSearchTextChanged(event) {
  	console.log('onSearchTextChanged');
  	this.setState({ searchString: event.nativeEvent.text });
  	console.log(this.state.searchString);
  }
  onCreditsChanged(event) {
  	console.log('onCreditsChanged');
  	this.setState({ creditsString: event.nativeEvent.text });
  	console.log(this.state.creditsString);
  }
  onContinuePressed(){
  	console.log('onContinuePressed');
  }
  render() {
  	console.log('SearchPage.render');
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Name/Code
        </Text>
        <View style={styles.flowRight}>
  		  <TextInput
    	    style={styles.searchInput}
    	    value={this.state.searchString}
    	    onChange={this.onSearchTextChanged.bind(this)}
    		placeholder='name and/or code'/>
  			
		</View>
        <Text style={styles.description}>
          # of Credits
        </Text>
        <View style={styles.flowRight}>
  		  <TextInput
    	    style={styles.searchInput}
    	    value={this.state.creditsString}
    	    onChange={this.onCreditsChanged.bind(this)}
    		placeholder='Number of Credits'/>
		</View> 
		<View style={styles.flowRight}>
			<Text style={styles.description}>
         		Recitation/Lab
        	</Text>
	        <Switch
	          onValueChange={(value) => this.setState({switchIsOn: value})}
	          style={{marginBottom: 10}}
	          value={this.state.switchIsOn} />
      	</View>
		<View style={styles.flowRight}>
			<TouchableHighlight style={styles.button} 
				onPress={this.onContinuePressed.bind(this)}
	      		underlayColor='#013a1c'>
	    		<Text style={styles.buttonText}>Continue</Text>
	  		</TouchableHighlight>
	  	</View>
      </View>
    );
  }
}

// part that adds the class times/schedule
class ClassTimes extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	    	start: 0,
	    	end: 0,
	    	days: {}
	  	};
  	}
}



module.exports = AddClass;