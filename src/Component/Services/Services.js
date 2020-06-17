import React, { Component } from 'react';

import Title from '../Title/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import classes from './Services.module.css'

class Services extends Component {
   state = {
      Services: [
         {
            icon: <FaCocktail />,
            title: 'Free Cocktail',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
         },
         {
            icon: <FaHiking />,
            title: 'Unlimited FaHiking',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
         },
         {
            icon: <FaShuttleVan />,
            title: 'Free FaShuttleVan',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
         },
         {
            icon: <FaBeer />,
            title: 'Strongest FaBeer',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
         }
      ]
   }

   render() {
      return (
         <section className={classes.services}>
            <Title title='Services' />
            <div className={classes.servicesCenter}>
               {this.state.Services.map((item, index) => {
                  return <article key={index} className={classes.service} >
                     <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
                  </article>
               })}
            </div>
         </section>
      )
   }
}

export default Services
