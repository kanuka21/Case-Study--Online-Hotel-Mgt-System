import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

export default function Login () {   

    return(
          <center>
            
          <div className='login_Container'>
            

            <div className="bgimg">
              <br />

          <Link to= '/Login'>
        <img 
        className='' 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS875amIOIGUYefmSPFSqOX9Z-veEnEPu1BuQ&usqp=CAU"/>
        </Link>  
        
            <form>
                <h5>E-mail</h5>
                <input type='text'  />

                <h5>password</h5>
                <input type='password' />
                       
                     
            </form>
            <br />

          <input type='submit' value="signUpButton" class="btn btn-success" /> 
           
          {/* <button className='btn btn-success' onClick={this.Login}>signInButton</button>  */}
         
            </div>    
            </div>
            
     </center>
        
      
    );
}  
