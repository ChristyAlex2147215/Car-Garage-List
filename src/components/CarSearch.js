import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { setSearchTerm } from '../store';

const CarSearch = () => {
  const dispatch=useDispatch();
  const searchTerm=useSelector((state)=>state.table.searchTerm);

  const handleChangeSearch=(e)=>
  {
    dispatch(setSearchTerm(e.target.value));
    
  }

  return (
    <div>
      <input type='text' onChange={handleChangeSearch} placeholder='Search vehicle' value={searchTerm}/>

    </div>
  )
}

export default CarSearch