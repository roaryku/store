import { useState } from 'react';
import './App.css';
import { data } from './data';
import Slides from './Slides';


function App() {
  const [store, setStore] = useState(data);

 

  return (
    <div>
      <div className='container'>
        <h1>Beauty Online Store</h1>
      </div>

      {store.map((item => {
        const {id, beautyName, quantity, description, price} = item;
        
        return(
          <div key={id}>
            <div className='container'>
            <h2>{id} - {beautyName}</h2>
          </div>

          <div>
              <Slides imageProps={image}/>
          </div>

          <div className='container'>
            <h4>available {quantity}</h4>
          </div>

          <div className='container'>
            <h4>$ {price}</h4>
          </div>

          <div className='container'>
            <p>{description}</p>
          </div>
        </div>
        )
      }))}
    </div>
  );
}

export default App;
