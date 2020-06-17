import React from 'react';
import { FaHome, FaPhone } from 'react-icons/fa'
import { IoIosMail } from "react-icons/io";

import classes from './ContactUs.module.css'

const contactUs = (props) => {
   return (
      <React.Fragment >
         <div className="marginTop">
            <iframe width="100%" height="500" title="mapFrame" src="https://maps.google.com/maps?width=100%&amp;height=200&amp;hl=en&amp;q=hotel%20sea%20palace+(hotel%20sea%20palace)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ><a href="https://www.maps.ie/coordinates.html">find my location</a>
            </iframe>
         </div>
         <div className={classes.container}>
            <div className={classes.contactUs}>
               <div>
                  <h4>Contact Us & Direction</h4>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                     <br />
                     <br />
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     <br />
                     <br />
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
               </div>
               <div className={classes.info}>
                  <div>
                     <h5>Resort Address:</h5>
                     <p><FaHome /> Putijuri, Bahubal, Habiganj</p>
                     <p><FaPhone /> +88 019 9000 1000, +88 019 1000 1000</p>
                     <p><IoIosMail /> info@thepalacelife.com</p>
                  </div>
                  <div>
                     <h5>Resort Address:</h5>
                     <p><FaHome /> Putijuri, Bahubal, Habiganj</p>
                     <p><FaPhone /> +88 019 9000 1000, +88 019 1000 1000</p>
                     <p><IoIosMail /> info@thepalacelife.com</p>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default contactUs;