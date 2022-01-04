import { Button } from 'bootstrap';
import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import ReservationService from '../services/ReservationService';


class ReservationList extends Component {
    constructor(props){
        super(props)
        this.state = {
            reservations : []
    }
   this.addReservation= this.addReservation.bind(this);
}

 componentDidMount() {
     ReservationService.getReservations().then((res) => {
         this.setState({ reservations: res.data});
         //console.log(reservations);
     });
 } 
   addReservation(){
       this.props.history.push('/add-reservation');
   }

    
    render() {
        return (
            
            <div>
                <br />
                  <h2 className='text-center'> Make Reservation</h2>
                  <div className=''>
                      <button className='btn btn-primary' onClick={this.addReservation}>Add New Reservation</button>
                      </div>
                      <br />
                      
                  <div className=''>
                      <table className='table table-dark table-bordered'>
                       <thead>
                           <tr> 
                            
                               <th scope="col">id</th>
                               <th scope="col">name</th>
                               <th scope="col">Email</th>
                               <th scope="col">CheckInDate</th>
                               <th scope="col">CheckOutDate</th>
                               <th scope="col">noOfGuest</th> 
                           </tr>
                           </thead>  

                           <tbody>
                               {
                                   this.state.reservations.map(
                                       reservation =>
                                       <tr key = {reservation.id}>
                                           <td scope="col">{reservation.id}</td>
                                           <td scope="col">{reservation.name}</td>
                                           <td scope="col">{reservation.email}</td>
                                           <td scope="col">{reservation.checkInDate}</td>
                                           <td scope="col">{reservation.checkOutDate}</td>
                                           <td scope="col">{reservation.noOfGuest}</td> 
                                           

                                       </tr>       
                                        )  }
                               </tbody>  </table>
                  </div>  </div>
        );
    }
}

export default  ReservationList;
