import React from 'react';
import Header from './Header'
import Author from './Author'
import './App.css';

function App() {
  return (
    <div className="App">
      < Header title="Welcome to Your Motivational Quotes"/>
      <Author authorName="Mark Twain"/>
      <Author authorName= "Michael Jordan"/>
      <Author authorName="Babe Ruth"/>
    </div>
  );
}

export default App;
