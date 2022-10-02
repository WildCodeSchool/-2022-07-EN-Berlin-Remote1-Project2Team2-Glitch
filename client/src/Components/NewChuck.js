import React from 'react';
import axios from 'axios';
import ChuckImg4 from './ChuckImg4';
import '../App.css';


function NewChuck() {
  const [joke, setJoke] = React.useState('');

  React.useEffect( function newChuck () {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then((res) => {
        setJoke(res.data.value);
        //console.log(res.data.value);
      })
      .catch((error) => console.log(error));

  }, [])
  

  return (
    
    <div className='joke'>      
      {joke} 
    </div>
    
  );
}
export default NewChuck;