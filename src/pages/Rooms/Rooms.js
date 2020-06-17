import React from 'react';

import Banner from '../../Component/Banner/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../../Component/RoomContainer';
import classes from './Rooms.module.css'

const Rooms = () => {
   return (
      <div>
         <div className={classes.roomsHero} >
            <Banner title="Our Rooms" >
               <Link to="/" className="btn-primary">
                  Return Home
               </Link>
            </Banner>
         </div>
         <RoomContainer />
      </div>
   )
}

export default Rooms
