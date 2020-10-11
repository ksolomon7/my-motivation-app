import React from 'react';
import Header from './Header';
import AuthorContainer from './AuthorContainer'
import arrayOfAuthors from './database'
import './App.css';

class App extends React.Component{

  state={
    authors: arrayOfAuthors
  }

  render(){
  return (
    <div className="App">
      <Header title="Your Motivational Quotes"/>
      < AuthorContainer authors={this.state.authors} />
    </div>
  )};
}

export default App;


  // set{this.state.authors.map((author=> {
  //   return <Author key={author.id} author={author.authorName}/>
  // })}