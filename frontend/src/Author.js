import React from 'react'
import Quote from './Quote'

class Author extends React.Component{

handleClick=(evt)=>{
    console.log("This still works")
}
   
   
    render(){   
        let {author, quote, motivationRate}= this.props
        return (
            <div className="container">
                <img src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=710&q=80" alt="a small board and tree"/>
                <br/>
                <p>Author: {author}</p>
                <Quote key={author} quote={quote}/>
                <button className="motivated-button" onClick={this.handleClick}>I am motivated!<br/><span>{motivationRate}</span></button> 
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Author











// Notes:

// state holds data within the class or functional component
// used when something inside of the component needs to changed

// state={
//     motivated:0 
//  }
 
 // setState is a function coming from the React 
 // setstate takes into two arguments-first is the objects 
 // the second is the callback argument- what to do when the state has changed
 
    // handleClick=(evt)=>{
     // Although this is not convention-it works
     //    let leveledUpMotivation= this.state.motivated+1
     //    this.setState({
     //        motivated: leveledUpMotivation
     //    })
        
     // Conventional way:functional setState
    //  this.setState((state)=>{
    //      return{
    //          motivated:state.motivated+1
            
    //      }
    //  })
    // }