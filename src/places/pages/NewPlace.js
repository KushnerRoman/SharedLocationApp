import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import './NewPlace.css'

export default function NewPlace() {
    return (
        <form className='place-form'>
            <Input type="text" label="Tilte" element='input' validators={[]} errorText='Please enter a Valid Title'/>
            
        </form>
    )
}
