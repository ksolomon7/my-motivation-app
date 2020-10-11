import React from 'react'

class Form extends React.Component{
    
    // Controlled Components:
    // state controls input and input controlling the state
    
    state={
        authorName:" ",
        quote:" ",
        motivationRate: 0
    }
    
    
    render(){
        return(
            <>
            <h5>Enter a New Motivational Quote</h5>
             <form>
                 <label htmlFor="authorName">Author Name:</label>
                 <input type="text" id="authorName"/>
                 <label htmlFor="quote">Quote:</label>
                 <input type="text" id="quote"/>
                 <label htmlFor="motivationRate">Motivation Rate:</label>
                 <input type="number" id="motivationRate"/>
             </form>
            </>
        )
    }
}

export default Form