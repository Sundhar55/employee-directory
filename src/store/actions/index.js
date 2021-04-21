// src/store/action/index.js

import { SET_EMPLOYEE, GET_EMPOLYEES } from "../../constants/action-types"

// GET EMPLOYEE
export const SetEmpolyeeAction = (payLoad) => {
 return{
    type: SET_EMPLOYEE,
    payLoad,
 } 
    
};

//GET ALL EMPLOYEES
export const GetEmpolyeesAction = (payLoad) => ({
    type: GET_EMPOLYEES,
    payLoad,
});
