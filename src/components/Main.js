import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Request'


const Main = () => {
 const [movies , setMovies] = useState([]);

 useEffect(()=>{
    axios.get(requests.requestPopular).then((response)=> setMovies(response.data))
 },[])
 console.log(movies.results)


  return (
    <div>   </div>
  )
}

export default Main