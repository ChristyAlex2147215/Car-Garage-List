import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {setName,setCost,addCar} from "../store/index";

const CarForm = () => {
  const dispatch=useDispatch();
  let carName=useSelector((state)=>state.form.carname);
  let carCost=useSelector((state)=>state.form.carcost);
  console.log("slice one is =>",useSelector((state)=>state.form));
  console.log("slice two is =>",useSelector((state)=>state.table));

  const handleNameChange=(e)=>
  {
    dispatch(setName(e.target.value));
  }
  const handleCostChange=(e)=>
  {
    dispatch(setCost(parseInt(e.target.value)));
  }
  const OnCLickAddCar=(e)=>
  {
    e.preventDefault();
    dispatch(addCar({name:carName,cost:carCost}));
    dispatch(setName(""));
    dispatch(setCost(0));
  
  }
  return (
    <div className='container border-2 rounded border-black place-self-center self-center'>
        <form onSubmit={OnCLickAddCar} className='place-self-center place-items-center place-content-center'>
            <input type='text' placeholder='Car Name' value={carName} onChange={handleNameChange} className='bordered border-red'/>
            <input type='number' placeholder='Car Cost' value={carCost || ""} onChange={handleCostChange}/>
            <button type='submit' onClick={OnCLickAddCar} className='bg-blue-700 text-white p-3'>Add Car</button>
        </form>
    </div>
  )
}

export default CarForm