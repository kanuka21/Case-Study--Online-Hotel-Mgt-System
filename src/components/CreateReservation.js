import React, { Component } from 'react';
import ReservationService from '../services/ReservationService';

class Createreservation extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: '',
            name: '',
            email: '',
            checkInDate: '',
            checkOutDate: '',
            noofGuest: ''
          
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeCheckInDateHandler = this.changeCheckInDateHandler.bind(this);
        this.changeCheckOutDateHandler = this.changeCheckOutDateHandler.bind(this);
        this.changeNoOfGuestHandler = this.changeNoOfGuestHandler.bind(this);
        
        this.saveReservation = this.saveReservation.bind(this);
    }

    saveReservation = (e) => {
        e.preventDefault();
        let reservation = {id: this.state.id, name: this.state.name, email: this.state.email, checkInDate: this.state.checkInDate,checkOutDate: this.state.checkOutDate, noofGuest: this.state.noofGuest};
        console.log('reservation => ' + JSON.stringify(reservation));

         ReservationService.createReservation(reservation).then(res => {
             this.props.history.push('/reservations');

         });

    }
    changeIdHandler= (event) => {
          this.setState({id: event.target.value});
    }
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
  }
  changeEmailHandler= (event) => {
    this.setState({email: event.target.value});
}

  changeCheckInDateHandler= (event) => {
    this.setState({checkInDate: event.target.value});
}
changeCheckOutDateHandler= (event) => {
    this.setState({checkOutDate: event.target.value});
}
changeNoOfGuestHandler= (event) => {
    this.setState({noofGuest: event.target.value});
}


   cancel() {
    this.props.history.push('/reservations');
   }

    render() {
        return (
            <div>

                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <br />
                          <h3 className='text-center'>Add Reservation</h3> 
                           <div className='card-body'>
                               <form>

                                   <div className='form-group'>
                                       <label>Id</label>
                                     <input placeholder="Id" name="id" className="form-control"
                                      value={this.state.id} onChange={this.changeIdHandler}/>
                                   </div>

                                   <div className='form-group'>
                                       <label>Name</label>
                                     <input placeholder="Name" name="name" className="form-control"
                                      value={this.state.name} onChange={this.changeNameHandler}/>
                                      </div>

                                      <div className='form-group'>
                                       <label>Email</label>
                                     <input placeholder="Email" name="email" className="form-control"
                                      value={this.state.email} onChange={this.changeEmailHandler}/>
                                      </div>

                                      <div className='form-group'>
                                       <label>CheckInDate</label>
                                     <input placeholder="CheckInDate" name="checkInDate" className="form-control"
                                      value={this.state.checkInDate} onChange={this.changeCheckInDateHandler}/>
                                      </div>

                                      <div className='form-group'>
                                       <label>CheckOutDate</label>
                                     <input placeholder="CheckOutDate" name="checkOutDate" className="form-control"
                                      value={this.state.checkOutDate} onChange={this.changeCheckOutDateHandler}/>
                                      </div>

                                      <div className='form-group'>
                                       <label>NoOfGuest</label>
                                     <input placeholder="NoOfGuest" name="noofguest" className="form-control"
                                      value={this.state.noofguest} onChange={this.changeNoOfGuestHandler}/>
                                      </div>

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

export default Createreservation;