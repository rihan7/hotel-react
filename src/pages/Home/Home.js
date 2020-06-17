import React, { useContext, useEffect } from 'react'

import Slide from '../../Component/Slide';
import Services from '../../Component/Services/Services';
import FeatureRooms from '../../Component/FeatureRooms/FeatureRooms';
import { RoomContext } from '../../Context'
import classes from './Home.module.css';

const Home = () => {
   const context = useContext(RoomContext);
   let { setNavColor } = context;
   useEffect(() => {
      setNavColor(false);
      return () => {
         setNavColor(true);
      }
   }, [setNavColor]);

   return (
      <div className={classes.home}>
         <div className={classes.slide100}>
            <Slide />
         </div>
         <Services />
         <FeatureRooms />
      </div>
   )

}

export default Home
