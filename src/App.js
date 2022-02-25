import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/navbar';
import Createexercise from './components/createExercise';
import CreateUser from './components/createUser';
import EditeExercise from './components/editExercise'
import ExeriseList from './components/exerciseList'


function App() {

  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'  element={<ExeriseList/>}/> 
          <Route path='/createexercise' element={<Createexercise/>}/> 
          <Route path='/createuser' element={<CreateUser/>}/> 
          <Route path='/editeexercise/:id' element={<EditeExercise/>}/> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
