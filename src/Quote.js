import React from 'react'


class Quote extends React.Component{
    render(){
        console.log(this.props.quote)
        return(
            <div>
                <ul>
                    {this.props.quote}
                </ul>
            </div>
        )
    }
}

export default Quote