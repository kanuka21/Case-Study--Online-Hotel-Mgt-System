import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from '../pages/Gallery';


class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
  }

}
  render() {
    return (
      <div>
        
          
        <header>
              <nav className='navbar navbar-expand-md navbar-light bg-light'> 
          <div>
            <a href='' className="navbar-brand" >Online Hotel Management System </a> </div>

          </nav>
        </header>
        
      </div>
    );
  }
}



export default Header;
