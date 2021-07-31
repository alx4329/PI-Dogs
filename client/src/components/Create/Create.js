import React, {useState, useEffect } from 'react';
import { /* connect, */ useDispatch, useSelector } from 'react-redux';
import { getTemps, postNewBreed } from '../../actions';
import "./Create.css"


export function Create(props) {
  const dispatch = useDispatch();
  
  useEffect(()=>{
        dispatch(getTemps())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const [tempToAdd, setTempToAdd] = useState('');
    
    const [state, setState] = useState({
      name: '',
      hmin: '',
      hmax: '',
      wmin:'',
      wmax: '',
      image:'',
      life_span: '',
      temps: [],
      newTemps:[]
    })
    
    const reduxTemps = useSelector(state => state.Temps);
    
    
    console.log(reduxTemps)
    const [checkedState, setCheckedState] = useState([]);

    useEffect(()=>{
      let val = new Array(reduxTemps.length).fill(false);
      setCheckedState(val)
    },[reduxTemps])
    
    console.log(checkedState);
    // let updatedCheckedState;

    const handleOnCheck = (temperamento, position) => {
      if(checkedState[position]=== true) {
        checkedState[position] = !checkedState[position]

        let nuevoArr = state.temps.filter((item)=> item !== temperamento )
        setState({
          ...state,
          temps: nuevoArr
        })
      } else {
        checkedState[position] = !checkedState[position];
        setState({
          ...state,
          temps: [...state.temps, temperamento]
        })
      }
      console.log(state)
    }

  function handleChange(e) {
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
  }


  function addNewTemp(temp){
      let tempValues = state.newTemps;
      tempValues.push(temp)
      setState({
        ...state,
        newTemps: tempValues
      })
      console.log(state)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // let agregaTemps=[];
    // let temperamentus = await reduxTemps.map((item,index)=>{
    //   if(checkedState[index] === true) agregaTemps.push(item)
    //   console.log(checkedState[index])
    // })
    // await setState({
    //     ...state,
    //     temps: agregaTemps
    //   })
    console.log(state)
    dispatch(postNewBreed(state))
  }

  

  return (
    <div className="form">
    <h3 className ="title" >Create Your Dog</h3>
    <form  onSubmit ={(e)=> handleSubmit(e) }>

      <label>Nombre</label>
      <input className="input-container" type="text" placeholder="Jumper" name = "name" value = {state.name} onChange={(e)=> handleChange(e) }></input>

      <div class="cut"></div>

      <label>Height</label>
      <input className="input-container" name = "hmin" placeholder="Minimum Height" value = {state.hmin} onChange={(e)=> handleChange(e) }></input>
      <input className="input-container" name = "hmax" placeholder="Maximun height" value = {state.hmax} onChange={(e)=> handleChange(e) }></input>

      <label>Weight</label>
      <input className="input-container" name = "wmin" placeholder="Minimum Weight" value = {state.wmin} onChange={(e)=> handleChange(e) }></input>
      <input className="input-container" name = "wmax" placeholder="Maximun Weight" value = {state.wmax} onChange={(e)=> handleChange(e) }></input>

      <label>Life Span</label>
      <input className="input-container"  type="text" placeholder="Years" name = "life_span" value = {state.life_span} onChange={(e)=> handleChange(e) }></input>

      <label>Image Url</label>
      <input className="input-container"  type="text" placeholder="Years" name = "image" value = {state.image} onChange={(e)=> handleChange(e) }></input>
      

      <label>Temperaments</label>
      <div className="temps" >
        {
          reduxTemps.map((item,index)=>{
            return(
              <li key={index}>
                <input
                  type="checkbox"
                  id={index}
                  name={item.nombre}
                  value={item.nombre}
                  onChange = {()=>handleOnCheck(item.nombre, index)}
                ></input>
                {item.nombre}
              </li>
            )
          })
        }
      </div>
      <label>New Temperament</label>
      <input className="input-container" type="text" name = "tempToAdd" value = {tempToAdd} onChange={(e)=> setTempToAdd(e.target.value) }></input>
      <button onClick = {(e)=>{
        e.preventDefault();
        addNewTemp(tempToAdd)}}>Add Temperament</button>

      <button className="submit" type = "submit">Create</button>
    </form>
    </div>
  )
};

// export default connect(null, {addTodo})(Create)
export default (Create)