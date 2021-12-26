import React from 'react'
import Card from '../../shared/components/UlElemtns/Card'
import PlaceItem from './PlaceItem'
import  './PlaceList.css'

export default function PlaceList(props) {
     if(props.items.length===0){
         return(
             <div className='place-list center'>
                 <Card>
                    <h1>No Places Found ,Create New one</h1>
                    <button></button>
                     
                 </Card>
             </div>
         )
     }
     return(
         <ul className='place-list'>
             {props.items.map(item=>
             <PlaceItem 
                key={item.id}
                id={item.id} image={item.imageUrl} 
                title={item.title} 
                description={item.description} 
                address={item.address}
                creatorId={item.creator}
                coordinates={item.location} />)}

         </ul>
     )
}
