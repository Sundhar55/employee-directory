//src/components/home/home.js

import React from "react";
import './home.css';
import {useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {SetEmpolyeeAction} from '../../store/actions/index';
  
const Home = (props) =>{
    const [empName, setEmpName] = useState('');
    const [searchBool, setSearchBool]= useState(false);

    const history = useHistory();
    const selectEmp = useSelector(state => state);
    console.log('before', selectEmp);
    let [error, setError] = useState(false);
    let emp = [];
    const dispatch = useDispatch();

    const getEmployee = (employee)=>{
        fetch('data.json',{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            emp =response[employee];
            
            if(emp === undefined){
                setError(true);
            }else{
                console.log('before dispatch', emp)
                dispatch(SetEmpolyeeAction({emp}))
                history.push('/overview/',{emp} );

            }
        })
        .catch(err=>{ console.log('err is', err)}); 
    };

    useEffect(()=>{
        if(searchBool === true){
            getEmployee(empName);
            setSearchBool(false);
        }
    });

    const OnChange = (e)=>{
        setEmpName(e.target.value);
    }

    const SearchEmployee=(e)=>{
        e.preventDefault();
        
        setSearchBool(true);
    }

    return(
        <div className='home'>
            <div><h2>Employee Expolorer</h2></div>
            <div>
                <form className="search-form" onSubmit={(e)=> SearchEmployee(e)}>
                    <input type="text" onChange={(e)=>OnChange(e)}></input>
                    <input type="submit" className="search-button" value="Search"></input>
                    {error &&  <label className='error' >employee not found, please search for another.</label>}
                </form>
            </div>
        </div>
    )
}
export default Home;