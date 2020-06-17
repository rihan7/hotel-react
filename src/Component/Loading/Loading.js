import React from 'react'

import loading from '../../images/gif/loading-arrow.gif';
import classes from './Loading.module.css'

function Loading() {
   return (
      <div className={classes.loading} >
         <h4> Rooms Data Loading</h4>
         <img src={loading} alt="Loading" />
      </div>
   )
}

export default Loading
