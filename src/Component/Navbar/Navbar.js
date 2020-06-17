import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa';

import logo from '../../images/Logo.png';
import { RoomContext } from '../../Context'
import classes from './Navbar.module.css'

class Navbar extends Component {
   state = {
      isOpen: false,
      navBC: false,
   }
   static contextType = RoomContext;

   componentDidMount() {
      window.addEventListener("scroll", () => {
         window.pageYOffset <= window.innerHeight / 2 ? this.navColour(false) : this.navColour(true);
      })
   }

   navColour = (result) => {
      this.setState({
         navBC: result
      })
   }

   handleToggle = () => {
      this.setState(prevSate => ({
         isOpen: !prevSate.isOpen
      }))
   }

   render() {
      let { navColor } = this.context;
      let navClass = this.state.navBC || navColor ? [classes.navbar, classes.navColor].join(' ') : classes.navbar

      return <nav className={navClass}>
         <div className={classes.navCenter} >
            <div className={classes.navHeader} >
               <Link to="/" >
                  <img src={logo} alt="Sea Beach" />
               </Link>
               <button type="button" className={classes.navBtn} onClick={this.handleToggle} >
                  <FaAlignRight className={classes.navIcon} />
               </button>
            </div>
            <ul className={this.state.isOpen ? [classes.navLinks, classes.showNav].join(' ') : classes.navLinks} >
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/rooms">Rooms</Link>
               </li>
               <li>
                  <Link to="/contact-us">Contact Us</Link>
               </li>
            </ul>
         </div>
      </nav>
   }
}

export default Navbar
