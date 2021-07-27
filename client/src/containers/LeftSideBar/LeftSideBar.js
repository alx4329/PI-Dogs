import React, { useEffect} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
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
            <button
                key = {index}
                onClick = {()=>handleClick(temp.nombre)}
            >
            {temp.nombre}
            </button>
        )
    })
    return (
        <div className= 'temps'>
            {renderTemps}
        </div>
    )
}

export default (LeftSideBar)