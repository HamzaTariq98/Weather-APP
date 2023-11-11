import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cards from './Cards/Cards';
import Scroll from './scroll'


const apiUrl = 'https://teal-difficult-basket-clam.cyclic.app'
function Root() {
  const fetchEmailData = async (email) => {
    setEmail(email);
    try {
      const response = await fetch(apiUrl+`/add/${email}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  }


  const [email, setEmail] = useState('user1');
  const [userData, setUserData] = useState(null);
  const [longLoading, setLongLoading] = useState(false);

  setTimeout(() => {
    setLongLoading(true);
  }, 3000);


  async function firstRun() {
    await fetch(apiUrl+'/get/ip/address')
          .then((response) => response.text())
          .then((userIp) => {
            fetchEmailData(userIp)
            
    })
  }
 
  
  useEffect(() => {
    firstRun()
  }, []);

  const addNewCard = async ()=> {
    setUserData(null);
    await fetch(apiUrl+`/addNewCard/${email}`)
    .then(response => response.json)
    .then(() => fetchEmailData(email))
  }

   
  const removeCard = async (event)=> {
    setUserData(null);
    let index = parseInt(event.target.className)
    await fetch(`${apiUrl}/removeCard/${email}/${index}`)
    .then(response => response.json)
    .then(() => fetchEmailData(email))
  }


  const changeLocation = async (event)=> {
    
    const newLocationName = prompt('Enter new city, country, ip',event.target.innerText) || event.target.innerText;
    if (newLocationName !== event.target.innerText){
      setUserData(null);
      const index = event.target.className;
      await fetch(apiUrl+`/removeCard/${email}/${index}/${newLocationName}`)
      .then(response => response.json)
      .then(() => fetchEmailData(email))
    }
  }

  return (
    <React.StrictMode>
      <div className='container'>
        <div className='row'>
          <div className='col header'>
            <Header email = {email}/>
          </div>
        </div>
        <hr />
        <div className="row">
          <div>
            <Scroll>
              <Cards longLoading= {longLoading} email={email} userData = {userData} addNewCard= {addNewCard} removeCard={removeCard} changeLocation ={changeLocation}/>
            </Scroll>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Root />);

reportWebVitals();
