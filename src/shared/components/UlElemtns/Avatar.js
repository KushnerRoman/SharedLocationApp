import './Avatar.css'

import React from 'react'

export default function Avatar(props) {
    return (
        <div className={`avatar ${props.className}`} style={props.style}>
            <img src={props.image}
                    alt={props.name}
                    style={{width :props.width , heigth:props.height}}/>
        </div>
    )
}
