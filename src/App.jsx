import React from 'react'
import Pizza from './components/Pizza'
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='container'>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default App
