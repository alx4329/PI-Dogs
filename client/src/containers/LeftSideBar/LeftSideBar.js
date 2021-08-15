import React, { useEffect} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import { filtByTemper, getTemps } from '../../actions';
import './LeftSideBar.css';

export function LeftSideBar(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTemps())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    function handleClick(value){
        dispatch(filtByTemper(value))
    }
    
    const temps = useSelector(state => state.Temps); 
    const renderTemps = temps.map((temp,index)=>{
        return (
            <ul>
            <button
                key = {index}
                onClick = {()=>handleClick(temp.nombre)}
                className="buttonlb"
            >
            {temp.nombre}
            </button>
            </ul>
        )
    })
    return (
        <div className= 'contLB'>
            {renderTemps}
        </div>
    )
}

export default (LeftSideBar)