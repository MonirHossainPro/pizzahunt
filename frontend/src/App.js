import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OurStaff from './pages/OurStaff';
import SingleProductPage from './pages/SingleProductPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomePage} exact />
      <Route path='/product/:id' component={SingleProductPage} />
      <Route path='/our-staff' component={OurStaff} exact />
      <Footer />
    </Router>
  );
};

export default App;
