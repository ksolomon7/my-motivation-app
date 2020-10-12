import React from 'react';
import Header from './Header';
import AuthorContainer from './AuthorContainer'
import Form from './Form'
import './App.css';

class App extends React.Component{

  state={
    authors: []
  }

  addAuthorToState=(newlyCreatedAuthor)=>{
   
  }

  componentDidMount(){
   fetch("http://localhost:3000/authors")
   .then(resp=>resp.json())
   .then(arrayOfAuthors=>{
     this.setState({
       authors: arrayOfAuthors
     })
   })
  }

  render(){
  return (
    <div className="App">
      < Header title="Your Motivational Quotes"/>
      < Form submitForm={this.addAuthorToState}/>
      < AuthorContainer authors={this.state.authors} />
    </div>
  )};
}

export default App;


  // set{this.state.authors.map((author=> {
  //   return <Author key={author.id} author={author.authorName}/>
  // })}