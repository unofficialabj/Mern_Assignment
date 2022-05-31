
import './App.css';
import Nav from './Component/Nav/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data1 from './Pages/Data1';
import Data2 from './Pages/Data2';
import Data3 from './Pages/Data3';
import {useState} from 'react';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/data1' element={<Data1 />}></Route>
        <Route path='/data2' element={<Data2 />}></Route>
        <Route path='/data3' element={<Data3 />}></Route>
      </Routes>
    </Router>


  );
}

export default App;
