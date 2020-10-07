import React from 'react'

class Quote extends React.Component{
    render(){
        console.log(this)
        return (
            <div>
                <p>Author: {this.props.authorName}</p>
            </div>
        )
    }
}

export default Quote