import React, { useEffect } from 'react'
import Card from '../Card/Card'
import AddCard from '../AddCard/AddCard'
import './Cards.css'

const Cards = (props) =>{

    if (props.userData === null){
        return (
            <div>Loading.....</div>
        )
    }
    const cardsArray = props.userData.map((card,i) => {
        return < Card key= {i} location = {card} value = {i} removeCard={props.removeCard} changeLocation={props.changeLocation}/>
    })

    const addCard = [<div></div>]
    if (props.userData.length<=5){
        addCard[0] = <AddCard addNewCard= {props.addNewCard}/>
    }
    return (
        <div className='cards-container'>
            {cardsArray}
            {addCard[0]}
                
        </div>
    )
}

export default Cards