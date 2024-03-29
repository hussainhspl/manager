import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from '../src/common';
import { emailChanged, passwordChanged, loginUser } from './actions';
// import console = require('console');

class LoginForm extends Component {
	
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}
	
	renderError() {
		if (this.props.error) {
			return (<View style={{ backgroundColor: 'white' }}>
				<Text style={styles.errorTextStyle}>
					{ this.props.error }
				</Text>
			</View>);
		}
	}
	render() {
		console.log('email : ', this.props);
		return (
			<Card>
				<CardSection>
					<Input
						onChangeText={this.onEmailChange.bind(this)}
						label="Email"
						placeholder='user@gmail.com'
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						onChangeText={this.onPasswordChange.bind(this)}
						secureTextEntry
						label="Password"
						placeholder='*******'
						value={this.props.password}
					/>
				</CardSection>
				{this.renderError()}
				<CardSection>
					{ this.props.loading ? 
						<Spinner size="large" />
						:
						<Button onPress={this.onButtonPress.bind(this)}> Login </Button>
					}
				</CardSection>


			</Card>				
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'

	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading };
};
export default connect(mapStateToProps, 
	{ emailChanged, passwordChanged, loginUser })(LoginForm);
