import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import {Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Login from "./pages/Login";
//import Reception from "./pages/Payment";
import Payment from "./pages/Payment";
import Gallery from "./pages/Gallery";
import {GoogleMap} from 'google-maps-react';
import { BrowserRouter , Routes} from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import bootstrap from "bootstrap";
import ReservationList from "./pages/ReservationList";
//import ReservationService from "./services/ReservationService";
import InventoryList from "./pages/InventoryList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Createreservation from "./components/CreateReservation";
import Createinventory from "./components/CreateInventory";


function App() {
  return (
    
     
   <>  
  
    
    <Navbar /> 
   
    
    
       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/home/" component={Home} />
       <Route exact path="/payment/" component={Payment} />
       <Route exact path="/gallery/" component={Gallery} />
       <Route exact path="/rooms/" component={Rooms} />
       <Route exact path="/rooms/:slug" component={SingleRoom} />
       <Route exact path ="/login" component={Login} />
       <Route exact path="/error/" component= {Error} /> 
       <Route exact path="/contactus/" component={ContactUs} />
       <Route exact path="/reservationList/" component={ReservationList} /> 
       <Route exact path="/inventoryList/" component={InventoryList} />
      <Route exact path="/add-reservation/" component={Createreservation} />
      <Route exact path="/add-inventory/" component={Createinventory} />
           
           
        
       </Switch>   
      
      </>  
    
  );
}

export default App;

