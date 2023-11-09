import React from "react";
import './AddCard.css'

const AddCard = (props) =>{
    
    return(
        <div className="add-weather-card" onClick={props.addNewCard}>
            <img src="/imgs/add.png" alt="weather" />
        </div>
    )
} 

export default AddCard;