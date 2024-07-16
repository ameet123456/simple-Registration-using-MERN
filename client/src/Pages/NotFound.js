import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
  return (
   
        <div className='nf'>
        <h1 className='nf-er'>404</h1>
        <h2 className='nf-p'>Page not Found</h2>
        
        <Link to="/" className='Link'>Go Back</Link>
        </div>
    
  )
}

export default NotFound