import React, { Component } from 'react'

import { RoomContext } from '../../Context';
import Loading from '../Loading/Loading'
import Room from '../Room/Room';
import Title from '../Title/Title'
import classes from './FeatureRooms.module.css'

class FeatureRooms extends Component {
   static contextType = RoomContext;

   render() {
      let { featuredRooms: rooms, loading } = this.context;
      rooms = rooms.map(room => {
         return <Room key={room._id} room={room} />
      })

      return (
         <section className={classes.featuredRooms} >
            <Title title="Feature Room" />
            <div className={classes.featuredRoomsCenter}>
               {loading ? <Loading /> : rooms}
            </div>
         </section>
      )
   }
}

export default FeatureRooms;
