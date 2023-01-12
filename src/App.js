import { useState } from 'react';
import './App.css';
import { data } from './data';
import Slides from './Slides';


function App() {
  const [store, setStore] = useState(data);
  const removeQuantity = (quantity) => {
    let newQuantity = store.filter(available => available.quantity !==quantity);
    setStore(newQuantity)
  }
 

  return (
    <div>
      <div>
        <h1>Beauty Online Store</h1>
      </div>
        
      <div className='container'>
      {store.map((item => {
        const {id, beautyName, quantity, price, image} = item;
        
        return(
          <div key={id}>
            <div>
              <Slides imageProps={image}/>
          </div>
            <div>
            <h4>{id} - {beautyName}</h4>
          </div>

          <div>
            <h5>available {quantity}</h5>
            
          </div>

          <div>
            <h5>$ {price}</h5>
          </div>

          <div className='container'>
            <button className='ctn' onClick={() => removeQuantity(quantity)}>Add to card</button>
          </div>
        </div>
        )
      }))}
    </div>
  </div>
  );
}

export default App;
