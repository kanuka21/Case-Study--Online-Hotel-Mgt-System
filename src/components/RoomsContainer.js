import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

/*export default function RoomContainer(){

    return (
        <RoomConsumer>
        {value => {
            const {Loading, sortedRooms, rooms} = value
            
            if(Loading) {
                return <Loading />;
            }
            return(
                <div>
                Hello from rooms container
                <RoomsFilter rooms= {rooms} />
                <RoomsList rooms = {sortedRooms}/>
                </div>
            );
        }}
    </RoomConsumer>*/

function RoomsContainer({context}){
    const{loading,sortedRooms,rooms} = context;
    if(loading)
    {
        return <Loading/>;
    }
    return(
        <>
            <RoomsFilter rooms ={rooms}/>
            <RoomsList rooms = {sortedRooms}/>
        </>
    );
}
export default RoomsFilter;  