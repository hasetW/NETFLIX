
import React, { useEffect, useState } from 'react';
import requests from '../../utils/request';
import axios from '../../utils/axios';
import './banner.css'
// import axios from 'axios';


export default function Banner() {
    const [Movies,setMovies]=useState({});
    useEffect(()=>{
      (async()=>{
        try{
          const request=await axios.get(requests.fetchNetflixOriginal)
          console.log(request);
          setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
        }catch(error){
          console.log("errors" ,error)
        }
      })()

    },[])
    function truncate(str,n){
      return str?.length > n ? str.substr(0 , n-1) + "..." : str;

    }
  return (
    <div className="Banner"
      style={{
        backgroundSize:'cover',
        backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8)), 
        linear-gradient(to left, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8)), 
        url("https://image.tmdb.org/t/p/original${Movies?.backdrop_path}")`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        
        
      }}>
        <div className="title-wrapper">
          <h1 className='Banner_title'>
            {Movies?.title|| Movies?.original_title || Movies?.original_name}
          </h1>
          <div >
              <button className="btn-btn btn playbtn">Play</button>
              <button className="btn-btn listbtn">My List</button>
          </div>
          <div className='overview'>
            <p>
              {truncate(Movies?.overview,150)}
            </p>

          </div>
        </div>
      

    </div>
  );
}
