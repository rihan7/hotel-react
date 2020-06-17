import React, { useContext } from 'react';

import { RoomContext } from '../../Context';
import Title from '../Title/Title';
import classes from './RoomFilter.module.css';

const getUnique = (items, value) => {
   return [...new Set(items.map(item => item[value]))]
}


function RoomFilter({ rooms }) {
   const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = useContext(RoomContext);
   let types = getUnique(rooms, 'type');
   types = ['all', ...types];
   types = types.map((item, index) => {
      return <option value={item} key={index} >{item}</option>
   });

   let people = getUnique(rooms, 'capacity');
   people = people.map((item, index) => {
      return <option key={index} value={item} >{item}</option>
   })


   return (
      <React.Fragment>
         <section className={classes.filterContainer}>
            <Title title="search Room" />
            <form className={classes.filterForm}>
               {/* select type  */}
               <div className={classes.formGroup}>
                  <label htmlFor="type">room type</label>
                  <select name="type" id="type" value={type} className={classes.formControl} onChange={handleChange}>
                     {types}
                  </select>
               </div>
               {/* end of select type */}
               {/* capacity  */}
               <div className="formGroup">
                  <label htmlFor="capacity">Guest</label>
                  <select name="capacity" id="capacity" value={capacity} className={classes.formControl} onChange={handleChange}>
                     {people}
                  </select>
               </div>
               {/* end of capacity */}
               {/* room price */}
               <div className={classes.formGroup}>
                  <label htmlFor="price">
                     Room Price ${price}
                  </label>
                  <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className={classes.formControl} />
               </div>
               {/* end of room price */}
               {/* size */}
               <div className="formGroup">
                  <label htmlFor="size">Room size</label>
                  <div className="sizeInputs">
                     <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} className="sizeInput" />
                     <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} className="sizeInput" />
                  </div>
               </div>
               {/* end of size */}
               {/* extras */}
               <div className="formGroup">
                  <div className="singleExtra">
                     <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                     <label htmlFor="breakfast" >breakfast</label>
                  </div>
                  <div className="singleExtra">
                     <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                     <label htmlFor="pets" >pets</label>
                  </div>
               </div>
               {/* end of extras */}

            </form>
         </section>
      </React.Fragment>
   )
}

export default RoomFilter
