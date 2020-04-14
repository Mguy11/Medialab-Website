import React from 'react';
import Header from './components/header';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/team';
import Research from './components/research';
import Insights from './components/insights';
import Ideas from './components/ideas';
import Concepts from './components/concepts';

function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Research />
      <Insights />
      <Ideas />
      <Concepts />
    </div>
  );
}

export default App;
