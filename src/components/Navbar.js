import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import HomePage from "./HomePage";
import Login from "../pages/Login";
import Header from "./Header";
import Footer from "./Footer";
//import InventoryList from "../pages/InventoryList";


export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle} >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul 
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}   >


            
            <li>
              <Link to="/home">Home</Link>
            </li>
            
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
             <Link to="/Login">Login</Link> 
             
            </li>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
            
            <li>
              <Link to="/reservationlist">ReservationList</Link>
            </li>
            <li>
              <Link to="/inventorylist">InventoryList</Link>
            </li>

          {/*  <Header />  */} 
            
            
           
          </ul>

        
        </div>
      </nav>
    );
  }
}