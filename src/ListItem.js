import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
// import console = require('console');

class ListItem extends Component {
	onRowPress() {
		console.log('function is getting called:');
		Actions.employeeEdit({ employee: this.props.employee });
	}
	render() {
		const { name } = this.props.employee;	
		console.log('name:', this.props);
		return (
			<TouchableHighlight onPress={this.onRowPress.bind(this)}>
				<CardSection>
					<Text style={styles.title}>
						{name}
					</Text>
				</CardSection>
			</TouchableHighlight>
		);
	}
}
const styles = {
	title: {
		fontSize: 18,
		padding: 15
	}
};
export default ListItem;
