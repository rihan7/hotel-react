import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import homeSlider1 from '../images/homeSlider-1.jpg';
import homeSlider2 from '../images/homeSlider-2.jpg';
import homeSlider3 from '../images/homeSlider-3.jpg';

let imagesArry = [homeSlider1, homeSlider2, homeSlider3];

function Slide(props) {
   let defaultImages;
   if (props.images) {
      defaultImages = props.images
   } else {
      defaultImages = imagesArry
   }

   let sliderArray = defaultImages.map((image, index) => {
      return (
         <div key={index}>
            <img src={image} alt="RoomImage" />
         </div>
      )
   })

   return (
      <Carousel autoPlay infiniteLoop showThumbs={!!props.showThumbs} stopOnHover={false} showStatus={false} width={props.width} >
         {sliderArray}
      </Carousel>
   );
}

export default Slide;
