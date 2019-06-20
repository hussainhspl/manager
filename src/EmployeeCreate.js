import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from './actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
// import console = require('console');

class EmployeeCreate extends Component {

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}> Create </Button>
				</CardSection>

			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	console.log('map state to prop', state.employeeForm.name, name);
	return { name, phone, shift };
};

export default connect(mapStateToProps, { 
	employeeUpdate,
	employeeCreate
})(EmployeeCreate);
