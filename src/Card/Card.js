import React from "react";
import './Card.css'
import {deffaultWeather} from '../data/deffaultWeather'

const Card = (props) => {
    const { locationName, days } = props.location || deffaultWeather;

   

    function convertDateToAbbreviatedDay(dateString) {  // GPT Generated
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        const date = new Date(dateString);
        if (isNaN(date)) {
          return '';
        }
        
        const dayOfWeek = daysOfWeek[date.getUTCDay()];
        return dayOfWeek;
      }

    return (
        <div className="weather-card">
            <div className="close"><a onClick={props.removeCard} ><img src="/Weather-APP/imgs/close.png" alt="close" className={`${props.value}`}/></a></div>
            
            <div className="row">
                
                <div className="col-6 items">
                    <div className="row change-region">
                        <div className="ancre-div"><a onClick={props.changeLocation} className={`${props.value}`}>{locationName}</a></div>
                    </div>
                    <div className="row">{`${days[0].tempreture}°C`}</div>
                </div>
                <div className="col-6">
                    <div><img src={`${days[0].weather}`} alt="weather" /></div>
                    <div>Today</div>
                </div>
            </div>
            <div className="row fcst-days">
                {days.slice(1).map((day, index) => (
                    <div key={index} className="col-2">
                        <div className="row"><img src={`${day.weather}`} alt="weather" /></div>
                        <div className="row">{`${day.tempreture}°C`}</div>
                        <div className="row">{convertDateToAbbreviatedDay(day.day)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;
