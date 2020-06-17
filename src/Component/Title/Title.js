import React from 'react';

import classes from './Title.module.css'

function Title(props) {
   return (
      <div className={classes.sectionTitle}>
         <h4>{props.title}</h4>
         <div></div>
      </div>
   )
}

export default Title;
