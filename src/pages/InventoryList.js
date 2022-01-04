import { Button } from 'bootstrap';
import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';

class InventoryList extends Component {
    constructor(props){
        super(props)
        this.state = {
            inventories : []
    }
       this.addInventory= this.addInventory.bind(this);
}

 componentDidMount() {
     InventoryService.getInventories().then((res) => {
         this.setState({ inventories: res.data});
        // console.log(inventories);
     });
 } 
       addInventory() {
           this.props.history.push('/add-inventory');
       }
    
    render() {
        return (
            <div>
                <br />
                  <h2 className='text-center'> Make Inventory</h2>
                
                  <div className=''>
                      <button className='btn btn-primary' onClick={this.addInventory}>Add New Inventory</button>
                      
                      </div>
                      <br />
                      <div className=''>
                      <table className='table table-striped table-bordered'>
                       <thead>
                           <tr> 
                               <th>inventoryId</th>
                               <th>invType</th>
                               <th>intName</th>
                               <th>status</th>
                               <th> price</th>
                               
                           </tr>
                           </thead>  

                           <tbody>
                               {
                                   this.state.inventories.map(
                                    inventory =>
                                       <tr key = {inventory.inventoryId}>
                                           <td>{inventory.inventoryId}</td>
                                           <td>{inventory.invType} </td>
                                           <td>{inventory.invName}</td>
                                           <td>{inventory.status}</td>
                                           <td>{inventory.price}</td>
                                         

                                       </tr>
                                   )
                               }
                               </tbody> 

                      </table>
                  </div>
        
            </div>
        );
    }
}

export default InventoryList
