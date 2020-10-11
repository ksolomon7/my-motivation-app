import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <h1 className="header">{this.props.title} </h1>
        )
    }
}


export default Header





// Note: functional component
// function Header(props){ 
//     return(
//             <h1 className="header">{props.title}</h1>    
//         )
// }