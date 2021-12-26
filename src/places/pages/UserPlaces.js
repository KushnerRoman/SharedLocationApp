import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Empite State Building',
        description:'Most famous sky scrapers in the world!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address:'20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:32.7801556,
            lng:35.0081635
        },
        creator:'u1'
       
    },
    {
        id:'p2',
        title:'Empite State Building',
        description:'Most famous sky scrapers in the world!',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
        address:'20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9878531
        },
        creator:'u2'
       
    }
]

export default function UserPlaces(props) {
     const userId= useParams().userId;
     const loadedPlaces=DUMMY_PLACES.filter(place=>place.creator===userId)

    return <PlaceList items={loadedPlaces}/>
       
    
}
