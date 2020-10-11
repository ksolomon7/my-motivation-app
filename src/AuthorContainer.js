import React from 'react'

import Author from './Author'

class AuthorContainer extends React.Component{
    
    arrayOfComponents=this.props.authors.map((singularAuthor)=>{
            return <div>
                <Author key={singularAuthor.id} author={singularAuthor.authorName} quote={singularAuthor.quote} motivationRate={singularAuthor.motivationRate}/>
            </div>
   })
    
    render(){
        return(
            <ul>
                {this.arrayOfComponents}
            </ul>
        )
    }
}

export default AuthorContainer