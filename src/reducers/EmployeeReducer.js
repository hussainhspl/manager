import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';
// import console = require('console');÷

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log(action);
            return action.payload;
        default: 
            return state;
    }
};

