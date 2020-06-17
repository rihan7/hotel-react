import React from 'react'
import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa'

import classes from './Footer.module.css'

function Footer() {
   return (
      <div className={classes.footer}>
         <div className={classes.socialItems}>
            <FaFacebookSquare />
            <FaInstagram />
            <FaYoutube />
         </div>
         <p>©Hotel Sea Beach</p>
      </div>
   )
}

export default Footer
