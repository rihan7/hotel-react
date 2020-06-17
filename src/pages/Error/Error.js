import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../../Component/Banner/Banner'
import classes from './Error.module.css'

function Error(props) {
   let statusCode = props.statusCode ? props.statusCode : 404,
      message = props.message ? props.message : "Page Not Found",
      path = props.path ? props.path : '/',
      returnTo = props.return ? props.return : 'Home';

   return (
      <div className={classes.error}>
         <Banner title={statusCode} subtitle={message} >
            <Link to={path} className="btn-primary" >
               Return {returnTo}
            </Link>
         </Banner>
      </div>
   )
}

export default Error
