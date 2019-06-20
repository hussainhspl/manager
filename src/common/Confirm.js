import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from '../common/CardSection';
import { Button } from '../common/Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
	const { ContainerStyle, CardSectionStyle, textStyle } = styles;
	return (
		<Modal
			transparent
			visible={visible}
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View style={ContainerStyle}>
				<CardSection style={CardSectionStyle}>
					<Text style={textStyle}> {children} </Text>
				</CardSection>
				<CardSection>
					<Button onPress={onAccept}> Yes </Button>
					<Button onPress={onDecline}> No </Button>
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = {
	CardSectionStyle: {
		justifyContent: 'center',
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		lineHeight: 40
	},
	ContainerStyle: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};
export { Confirm };