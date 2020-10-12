import React from 'react';
import Header from './Header';
import AuthorContainer from './AuthorContainer'
import Form from './Form'
import './App.css';

class App extends React.Component{

  state={
    authors: []
  }

  submitForm=(info)=>{
    console.log(info)
  }

  componentDidMount(){
   fetch("http://localhost:3000/authors")
  }

  render(){
  return (
    <div className="App">
      < Header title="Your Motivational Quotes"/>
      < Form submitForm={this.submitForm}/>
      < AuthorContainer authors={this.state.authors} />
    </div>
  )};
}

export default App;


  // set{this.state.authors.map((author=> {
  //   return <Author key={author.id} author={author.authorName}/>
  // })}