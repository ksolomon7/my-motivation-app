import React from 'react';
import Header from './Header'
import Author from './Author'
import './App.css';

class App extends React.Component{

  state={
    authors: ["Mark Twain", "Michael Jordan", "Babe Ruth"]
  }


  render(){
  return (
    <div className="App">
      <Header title="Welcome to Your Motivational Quotes"/>
      <hr/>
      {this.state.authors.map((author,index)=> {
        return <Author key={index} author={author}/>
      })}
    </div>
  )};
}

export default App;
