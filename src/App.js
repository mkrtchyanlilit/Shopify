import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get('https://ns-shopify.herokuapp.com/api/v1/categories').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
