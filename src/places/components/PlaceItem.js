import React,{useState} from 'react'
import './PlaceItem.css'
import Card from '../../shared/components/UlElemtns/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UlElemtns/Modal'
import Map from '../../shared/components/UlElemtns/Map'

export default function PlaceItem(props) {
    const[showMap,setShowMap]=useState(false);

    const openMapHandler=()=>{
        setShowMap(true)
    }
    const colseMapHandler=()=>{
        setShowMap(false)
    }
    return (
        <React.Fragment>
            <Modal 
                show={showMap}
                onCancle={colseMapHandler}
                header={props.address}
                content="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={colseMapHandler}>Close</Button>}
            >
                <div className='map-container'>
                    
                    <Map center={props.coordinates} zoom={16} />
                </div>
            </Modal>
              <li className='place-item'>
                    <Card className='place'>
                        <div className='place-item__image'>
                            <img src={props.image} alt={props.title}/>
                        </div>
                        <div className='place-item__info'>
                            <h2>{props.title}</h2>
                            <h3>{props.address}</h3>
                            <p>{props.description}</p>
                        </div>
                        <div className='place-item__actions'>
                            <Button inverse onClick={openMapHandler} >VIEW ON MAP</Button>
                            <Button to={`/places/${props.id}`} >EDIT</Button>
                            <Button danger>DELETE</Button>
                        </div>
                    </Card>
                    
                </li>
        </React.Fragment>
      
    )
}
