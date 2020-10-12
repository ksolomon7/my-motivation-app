import React from 'react'


class Quote extends React.Component{
    render(){
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