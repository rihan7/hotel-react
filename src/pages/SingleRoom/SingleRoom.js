import React, { Component } from 'react';

import { RoomContext } from '../../Context';
import Slide from '../../Component/Slide';
import classes from './SingleRoom.module.css'
import Error from '../Error/Error';

class SingleRoom extends Component {
   constructor(props) {
      super(props);
      this.state = {
         slug: this.props.match.params.slug
      }
   }
   static contextType = RoomContext;

   render() {
      const { getRoom } = this.context;
      const room = getRoom(this.state.slug);
      if (!room) {
         return <Error message="No Such Room Found" path="/rooms" return="Rooms" />
      }

      const { description, capacity, size, price, extras, breakfast, pets, images } = room;

      return (
         <React.Fragment>
            <Slide images={images} showThumbs width="70%" />
            <section className={classes.singleRoom} >
               <div className={classes.singleRoomInfo}>
                  <article className={classes.desc}>
                     <h3>Details</h3>
                     <p>{description}</p>
                  </article>
                  <article className={classes.info}>
                     <h3>Info</h3>
                     <h6>price: ${price}</h6>
                     <h6>price: ${size} SQFT</h6>
                     <h6> max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                     <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                     <h6>{breakfast && "free breakfast included"}</h6>
                  </article>
               </div>
            </section>
            <section className={classes.roomExtras}>
               <h6>extras</h6>
               <ul className={classes.extras}>
                  {extras.map((item, index) => {
                     return <li key={index}>- {item}</li>
                  })}
               </ul>
            </section>
         </React.Fragment>
      )
   }
}

export default SingleRoom
