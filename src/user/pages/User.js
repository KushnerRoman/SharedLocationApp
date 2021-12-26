import React from 'react'
import UserList from '../components/UserList'

export default function User() {
    const USER = [
        {
        id: 'u1',
        name:'Roman Kushenr',
        image:"https://media.istockphoto.com/photos/london-tower-bridge-river-thames-city-skyscrapers-illuminated-sunset-picture-id860119662",
        places: 3
        
        }
    ]
    return (
        <UserList items={USER}/>
    )
}
