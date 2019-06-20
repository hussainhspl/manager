import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
// import values from 'lodash.values';
import _ from 'lodash';
import ListItem from './ListItem';
import { employeesFetch } from '../src/actions';
// import console = require('console');

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		// next props are next set of props that this component will 
		// be rendered with
		// this.props is still the old set of props 

		this.createDataSource(nextProps);
	}

	createDataSource({ employees }) {
		console.log(employees);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}
	renderRow(employee) {
		return <ListItem employee={employee} />;
		// return console.log('employee:', employee);
		// return <Text> {item.name} </Text>;
		// return <ListItem empl={item.name} />;
	}
	render() {
		console.log(this.props);
		return (
			<View>
				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
				<Text>hello</Text>
			</View>
			// <FlatList
			// 	data={this.props.employees}
			// 	// renderItem={({ item }) => (
			// 	// 	<Text> {item.name} </Text>
			// 	// )}
			// 	renderItem={({ item }) => this.renderRow(item)}
			// />
		);
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		console.log('val:', val);
		return { ...val, uid };
	});
	// const arrayOfObj = Object.entries(state.employees).map((e) => ({ [e[0]]: e[1] }));
	console.log(typeof (employees));
	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
