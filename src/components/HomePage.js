import React, { Component } from 'react'
import { Link } from "react-router-dom";

function HomePage () {

    return (
           
        <div className='HomePage'>
            <Link to= '/'>
            <img 
            className='defaultBcg' 
            src="http://www.hotelfagus.org/wp-content/uploads/2015/06/feat.jpg" 
            alt='Logo'
            />
            </Link>   

     </div>
        
    )
}

export default HomePage