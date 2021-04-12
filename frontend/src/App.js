import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer></Footer>
    </div>
  );
};

export default App;
