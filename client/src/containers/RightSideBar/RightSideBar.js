import React from 'react';
import { useDispatch } from 'react-redux';
import { orderBy } from '../../actions';
import './RightSideBar.css'

export function RightSideBar(){
    const dispatch = useDispatch();

function handleClick(value){
        dispatch(orderBy(value))
    }


    return(
        
        <div className ='orderBy'>
            <h3 id="titleRB">Order By</h3>
            <button className="button from-right" onClick = {()=>handleClick('AZA')}>AZ-Ascending</button>
            <button className="button" onClick = {()=>handleClick('AZD')}>AZ-Descending</button>
            <button className="button" onClick = {()=>handleClick('WA')}>Weight-Ascending</button>
            <button className="button" onClick = {()=>handleClick('WD')}>Weight-Descending</button>
        </div>
        
    )
}

export default (RightSideBar)