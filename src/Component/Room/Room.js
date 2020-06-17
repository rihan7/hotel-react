import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Room.module.css'

function Room(props) {

   return (
      <article className={classes.room}>
         <div className={classes.imgContainer}>
            <img src={props.room.images[0]} alt="Single Room" />
            <div className={classes.priceTop}>
               <h6>${props.room.price}</h6>
               <p>per night</p>
            </div>
            <Link to={`/rooms/${props.room.slug}`} className={["btn-primary", classes.roomLink].join(' ')}>
               Feature
            </Link>
         </div>
         <p className={classes.roomInfo}>{props.room.name}</p>
      </article>
   )
}

Room.propTypes = {
   room: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
   })
}

export default Room
