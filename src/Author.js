import React from 'react'

class Author extends React.Component{
   
state={
   motivated:0 
}
   handleClick=(evt)=>{
       let leveledUpMotivation= this.state.motivated+1
       this.setState({
           motivated: leveledUpMotivation
       })
       console.log(this.props.authorName)
   }
    
    render(){         
        return (
            <li className="container">
                <img src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=710&q=80" alt="motivational image"/>
                <p>Author: {this.props.authorName}</p>
                <button className="motivated-button" onClick={this.handleClick}>I am motivated! <span>{this.state.motivated}</span></button> 
            </li>
        )
    }
}

export default Author

// Need to change the image for the quotes-make them smaller look at how to add icons