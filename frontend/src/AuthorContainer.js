import React from 'react'
import Author from './Author'

function AuthorContainer(props){
    let arrayOfComponents=props.authors.map((singularAuthor)=>{
            return <Author key={singularAuthor.id} author={singularAuthor.authorName} quote={singularAuthor.quote} motivationRate={singularAuthor.motivationRate}/>
            })
 
        return(
            <ul>
                {arrayOfComponents}
            </ul>
        )

}

export default AuthorContainer