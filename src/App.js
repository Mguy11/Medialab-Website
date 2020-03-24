import React from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
import './styles/style.scss';
import Intro from './sections/__intro';
import Models from './sections/__models';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Intro />
        <Models />
        <Footer />
      </div>
    </div>
  );
}

export default App;
