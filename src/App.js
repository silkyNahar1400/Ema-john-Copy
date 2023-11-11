import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navigation/nav';
import Shop from './components/shop/shop';
import Product from './components/product/product';



function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Shop></Shop>
    </div>
  );
}

export default App;
