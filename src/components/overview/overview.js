import { NavLink, useLocation, useParams } from "react-router-dom";
import './overview.css'

const OverView = (props) =>{
    const {params}= useParams();
    const loc = useLocation();
    console.log('params is ', params, loc);
    const subOrdinates =  loc.state.emp.length >1 
                            ? loc.state.emp[1].hasOwnProperty('direct-subordinates') ? loc.state.emp[1]['direct-subordinates'] : []
                            : [];

    return(
        <div>
            <div className='header-row'> <h2>Employee OverView  </h2>  <NavLink className ='back-button' to="/home">home</NavLink> </div>
            <div> <h3>Direct SubOrdinates are :</h3> </div>
            {subOrdinates.length > 0 
                ? subOrdinates.map(item => <li className='no-bullets' key={item}>{item}</li>)    
                : <span>no sub oridnates present</span>
        }
        </div>
    )
}
export default OverView;