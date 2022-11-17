import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Addform from './component/Addform';
import Productlist from './component/Productslist';
import './App.css';


function App() {


  return (
    <div className="App" >
      <Header />
      <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/add-products" element={<Addform />} />
        </Routes>
    </div>
  );
}

export default App;
