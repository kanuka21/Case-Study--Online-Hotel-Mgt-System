import { green } from "@material-ui/core/colors";
import React from "react";
import { Link } from "react-router-dom";
import InventoryList from "./InventoryList";

export default function Payment() {

    return (
        <center>
        
        <div className='Payment'>

                    <a href='http://localhost:8089/payments'>

                        <br />

                        <br />
                        <br />

                               <button style={{color:"green"}}>

                                      Payment

                                   </button>

                                     </a>
            

        <Link to= '/Payment'>
            <br />
            <br />
        
        <img 
        className='payment' 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPJ401l28pUGslXzNz3kB5ZjUFpDxfZoxdg&usqp=CAU"
        />
        

         

        </Link>  

        

        
 
</div>

</center>
        
    )
}