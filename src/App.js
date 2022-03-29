import React from 'react';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import {TodosList} from './components/todosList';
import {TodoDetail} from './components/todoDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/list' element={<TodosList/>}></Route>
        <Route exact path='/detail/:id' element={<TodoDetail/>}></Route>
        <Route path='*' element={<Navigate to="/list" replace/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
