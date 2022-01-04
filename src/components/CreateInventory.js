import React, { Component } from 'react';
import ReservationService from '../services/ReservationService';

class CreateInventory extends Component {
    constructor(props){
        super(props)

        this.state = {
            inventoryid: '',
            intType: '',
            intName: '',
            status: '',
            price: '',
            
          
        }
        this.changeInventoryIdHandler = this.changeInventoryIdHandler.bind(this);
        this.changeIntTypeHandler = this.changeIntTypeHandler.bind(this);
        this.changeIntNameHandler = this.changeIntNameHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        
        this.saveInventory = this.saveInventory.bind(this);
    }

    saveInventory = (e) => {
        e.preventDefault();
        let inventory = {inventoryId: this.state.inventoryid, intType: this.state.intType, intName: this.state.intName,
             status: this.state.status,price: this.state.price};
        console.log('inventory => ' + JSON.stringify(inventory));

         ReservationService.createInventory(inventory).then(res => {
             this.props.history.push('/inventories');

         });

    }
    changeInventoryIdHandler= (event) => {
          this.setState({inventoryid: event.target.value});
    }
    changeIntTypeHandler= (event) => {
        this.setState({intType: event.target.value});
  }
   changeIntNameHandler= (event) => {
    this.setState({intName: event.target.value});
  }

   changeStatusHandler= (event) => {
    this.setState({status: event.target.value});
 }
  changePriceHandler= (event) => {
    this.setState({price: event.target.value});


     }

   


   cancel() {
    this.props.history.push('/inventories');
   }

    render() {
        return (
            <div>

                <div className='container'>
                    <div className='row'>
                        
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <br />
                          <h3 className='text-center'>Add Inventory</h3> 
                        
                           <div className='card-body'>
                               <form>

                                   <div className='form-group'>
                                       <label>InventoryId</label>
                                     <input placeholder="InventoryId" name="inventoryid" className="form-control"
                                      value={this.state.inventoryid} onChange={this.changeInventoryIdHandler}/>
                                   </div>

                                   <div className='form-group'>
                                       <label>IntType</label>
                                     <input placeholder="IntType" name="intType" className="form-control"
                                      value={this.state.intType} onChange={this.changeIntTypeHandler}/>
                                      </div>

                                      <div className='form-group'>
                                       <label>IntName</label>
                                     <input placeholder="IntName" name="intName" className="form-control"
                                      value={this.state.intName} onChange={this.changeIntNameHandler}/>
                                      </div>

                                      <div className='form-group'>
                                       <label>Status</label>
                                     <input placeholder="Status" name="status" className="form-control"
                                      value={this.state.status} onChange={this.changeStatusHandler}/>
                                      </div>

                                      <div className='form-group'>
                                       <label>Price</label>
                                     <input placeholder="Price" name="price" className="form-control"
                                      value={this.state.price} onChange={this.changePriceHandler}/>
                                      </div>

                            <br />
                           

                        <button className='btn btn-success' onClick={this.saveReservation}>Save</button>
                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>



                               </form>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateInventory;