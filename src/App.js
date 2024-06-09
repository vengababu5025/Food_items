
import './App.css';
import React,{useState} from 'react'
import Products from './Products';

function App() {
  const [search,setsearch]=useState('');
  const [data,setData]=useState([]);
  const YOUR_APP_ID='6c359811';
  const YOUR_APP_KEY='0f2fa23de03586c2bf96465afa1ccff3';
  const submitHandler=e=>{
      e.preventDefault();
      console.log(search)
      fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&calories=591-722&health=alcohol-free`).then(
        response=>response.json()
      ).then(
        data=>setData(data.hits) 
      )
  }
  return (
    <div className="App">
      <h2>Food Recipe App</h2><br></br>
      <form onSubmit={submitHandler}>
      <input type='text' value={search} onChange={(e)=>setsearch(e.target.value)}></input><br/><br/>
      <input type='submit' className='btn btn-primary' value='Serach'></input>
      </form>
      {console.log(data.length)}
      {
        
        data.length>0?<Products data={data}/>:null
      }
    </div>
  );
}

export default App;
