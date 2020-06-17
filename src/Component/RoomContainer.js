import React from 'react';

import RoomFilter from './RoomFilter/RoomFilter';
import RoomList from './RoomList/RoomList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading/Loading';

function RoomContainer({ context }) {
   const { loading, sortedRooms, rooms } = context;

   if (loading) {
      return <Loading />
   }

   return (
      <div>
         <RoomFilter rooms={rooms} />
         <RoomList rooms={sortedRooms} />
      </div>
   )
}

export default withRoomConsumer(RoomContainer)
