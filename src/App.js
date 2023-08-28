import React from 'react'
import CarForm from "../src/components/CarForm";
import CarList from "../src/components/CarList";
import CarSearch from "../src/components/CarSearch";
import {CarValue} from "../src/components/CarValue";

const App = () => {
  return (
    <div>
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue/>
      
    </div>
  )
}

export default App