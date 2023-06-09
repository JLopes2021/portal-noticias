import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
const [posts,setPosts] = useState([]);

useEffect(()=>{
  axios.get('http://localhost/noticiasweb/')
  .then(function(res){
    setPosts(res.data);
  })
},[])

  return (
    <div className="App">
     {
      posts.map(function(val){
        return(
         <div className='container-noticia'>
            <img src={val.imagem}/>
            <p>{val.noticia}</p>
         </div>
        )
      })
     }
    </div>
  );
}

export default App;
