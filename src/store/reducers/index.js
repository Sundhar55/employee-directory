import { GET_EMPOLYEES, SET_EMPLOYEE } from "../../constants/action-types"
import {combineReducers} from 'redux'
const intitalState = {
    selectedEmployee : [],
    employees: [],
}
export  const EmployeeReducer = ( state=intitalState, action) =>{
    if(action.type === SET_EMPLOYEE){
        
        console.log('in setemployee loop of reduce', action.payLoad);
        
        const newState = {...state,selectedEmployee:action.payLoad.emp};
        console.log('new state is ', newState);
        return newState;
    } else if( action.type === GET_EMPOLYEES){
        console.log('in getEmployees');
        return state;
    } else {
        return state;
    }
}

const UserReducer = (state= intitalState,action)=> {
    if(action.type === 'user'){
        return {...state} ;
    }else {
        return state;
    }
}

const rootReducer = combineReducers({
    employee: EmployeeReducer
});

export default rootReducer;