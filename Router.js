import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/LoginForm';
import EmployeeList from './src/EmployeeList';
import EmployeeCreate from './src/EmployeeCreate';
import EmployeeEdit from './src/EmployeeEdit';

// import console = require('console');

const RouterComponent = () => {
	return (
		<Router style={{ flex: 1, backgroundColor: '#f00' }} >
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>
				<Scene key="main">
					<Scene 
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						key="employeeList" 
						component={EmployeeList} 
						title="Employees"
						initial
					/>
					<Scene key="employeeCreate" component={EmployeeCreate} title="Create Employees" />
					<Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
				</Scene>
			</Scene>
		</Router>
	); 
};

export default RouterComponent;
