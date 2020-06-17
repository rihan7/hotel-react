import React, { Component } from 'react';

const RoomContext = React.createContext();


class RoomProvider extends Component {
   state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
      type: 'all',
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      mazSize: 0,
      breakfast: false,
      pets: false,
      navColor: true
   };

   getData = async () => {
      try {
         let rooms = await (await fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'X-Requested-With': 'XMLHttpRequest'
            }
         })).json();

         let featuredRooms = rooms.filter(room => {
            return room.featured === true;
         });
         let maxPrice = Math.max(...rooms.map(item => item.price));
         let maxSize = Math.max(...rooms.map(item => item.size));
         this.setState({
            ...this.state,
            rooms: rooms,
            sortedRooms: rooms,
            featuredRooms: featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
         })
      } catch (error) {
         console.log(error)
      }
   }

   componentDidMount() {
      this.getData()
   }

   formatedData = (items) => {
      return items.map(item => {
         return {
            id: item.sys.id,
            ...item.fields,
            images: item.fields.images.map(image => {
               return image.fields.file.url
            })
         }
      })
   };

   getRoom = (slug) => {
      return this.state.rooms.find(room => room.slug === slug)
   }

   handleChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value
      const name = event.target.name;

      this.setState({
         [name]: value
      }, this.filterRooms)
   }

   filterRooms = () => {
      const { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;

      let tempRooms = [...rooms];
      if (type !== 'all') {
         tempRooms = tempRooms.filter(item => item.type === type);
      }
      if (+capacity !== 1) {
         tempRooms = tempRooms.filter(item => item.capacity === +capacity);
      }

      tempRooms = tempRooms.filter(item => item.price <= +price);

      tempRooms = tempRooms.filter(item => item.size >= +minSize && item.size <= +maxSize);
      if (breakfast) {
         tempRooms = tempRooms.filter(item => item.breakfast === true)
      }
      if (pets) {
         tempRooms = tempRooms.filter(item => item.pets === true)
      }

      this.setState({
         ...this.state,
         sortedRooms: tempRooms,
      })

   }

   setNavColor = (boolean) => {
      this.setState({
         ...this.state,
         navColor: boolean
      })
   }

   render() {
      return (
         <RoomContext.Provider
            value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange, setNavColor: this.setNavColor }} >
            {this.props.children}
         </RoomContext.Provider>
      )
   }
}

export function withRoomConsumer(Component) {
   return function ConsumerWrapper(props) {
      return <RoomConsumer>
         {value => <Component {...props} context={value} />}
      </RoomConsumer>
   }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };


