import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'

export const CarValue = () => {
  const dispatch=useDispatch();
  const cars=useSelector((state)=>state.table.cars);  
  let finalAmount=0;
  cars.forEach(element => {
    return finalAmount+=element.cost  
  });
  return (
    <div>
      <p>Total Amount:{finalAmount} 
      </p>
    </div>
  )
}
