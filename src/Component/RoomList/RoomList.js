import React from 'react'

import Room from '../Room/Room';
import classes from './RoomList.module.css'

function RoomList({ rooms }) {

   if (rooms.length === 0) {
      return (
         <div className={classes.emptySearch}>
            <h3>Unfortunately no rooms matched your search</h3>
         </div>
      )
   }

   return (
      <section className={classes.roomsList}>
         <div className={classes.roomsListCenter}>
            {
               rooms.map(item => {
                  return <Room key={item._id} room={item} />
               })
            }
         </div>
      </section>
   )
}

export default RoomList
