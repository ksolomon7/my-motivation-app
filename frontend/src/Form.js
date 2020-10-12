import React from 'react'

class Form extends React.Component{
    
    // Controlled Components:
    // state controls input and input controlling the state
    
    state={
        authorName:" ",
        quote:" ",
        motivationRate: 0
    }
    
    // this handles the form input to control state
    handleFormInput=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value, 
        })
    }

    // this handles the submission of the form so it sends the info
    // up to the parent
    handleSubmit=(evt)=>{
        evt.preventDefault()
        fetch("http://localhost:3000/authors",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                authorName:this.state.authorName,
                quote: this.state.quote,
                motivationRate: this.state.motivationRate
            })
        })
        .then(resp=>resp.json())
        .then(newAuthor=>{
            console.log(this.props)
        })
    }




    render(){
        return(
            <>
            <h5>Enter a New Motivational Quote</h5>
             <form onSubmit={this.handleSubmit}>
                 <label htmlFor="authorName">Author Name:</label>
                 <input type="text" id="authorName" 
                 value={this.state.authorName}
                 onChange={this.handleFormInput}
                 name="authorName"
                 />
                 <label htmlFor="quote">Quote:</label>
                 <input type="text" id="quote" 
                 value={this.state.quote}
                 onChange={this.handleFormInput}
                 name="quote"
                 />
                 <label htmlFor="motivationRate">Motivation Rate:</label>
                 <input type="number" id="motivationRate" 
                 value={this.state.motivationRate}
                 onChange={this.handleFormInput}
                 name="motivationRate"
                 />
                 <input type="submit" value="Add A Quote"/>
             </form>
            </>
        )
    }
}

export default Form