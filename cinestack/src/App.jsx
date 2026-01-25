import React, { useState } from 'react'
import './App.css'

function App() {

  const[count, setCount] = useState(0)
  const[cssName, setCssName] = useState('selected') 
  const[id, setId] = useState('')  
  const[watchlist, setWatchlist] = useState('watchlist-image')


  const[movies, setMovies] = useState([
    {
    name:"The Paradise",
    image:'/the-paradise.avif',
    watchlist:'/add.png'
  },

   {
    name:"Toxic",
    image:'/toxic.avif',
    watchlist:'/add.png'
  },

  {
    name:"G2",
    image:'/g2.avif',
    watchlist:'/add.png'
  },

  {
    name:"Mana prasad gaaru",
    image:'/msvp.avif',
    watchlist:'/add.png'
  },

  {
    name:"Bhartha mahasayulu",
    image:'/bmv.avif',
    watchlist:'/add.png'
  },

  {
    name:"Nari Nari",
    image:'/nnn.avif',
    watchlist:'/add.png'
  },

  {
    name:"Ananaga oka raju",
    image:'/aao.avif',
    watchlist:'/add.png'
  },

  {
    name:"Toxic",
    image:'/toxic.avif',
    watchlist:'/add.png'
  },

  {
    name:"Toxic",
    image:'/toxic.avif',
    watchlist:'/add.png'
  },

  {
    name:"Toxic",
    image:'/toxic.avif',
    watchlist:'/add.png'
  }
])

const[selected, setSelected] =useState([])

const addToWatchlist = (index) =>{

  if(movies[index].watchlist=='/remove.png'){
    setCount(count-1)
    movies[index].watchlist='/add.png'
    setMovies([...movies])

    for(let i=0; i<selected.length; i++){
       if(selected[i].name == movies[index].name){
        selected.splice(i,1)
        setSelected([...selected])
       }
    }
  }
  
  else{
    setCount(count+1)
    movies[index].watchlist='/remove.png'
    setMovies([...movies])
    setSelected([...selected,movies[index]])
  }
}

const showMovies = () =>{
    setCssName('visible')
    setWatchlist('not-allowed')
    setId('main')
}

  return (
    <>
    <div className='main' id={id}>
      <div className='first'>
          <img src='./cine.png' width='100'/>
          
          <button id='watchlist-btn' onClick={()=>{showMovies()}}>Watchlist: {count}</button>
      </div>
      <br />
    
      <br /><br /> 
      <br />
      <div className='second'>

         {movies.map((item,index)=>
       
        <div id='movie' key={index}>
          <img src={item.image} height="180"/>

          <div id='watchlist'>
          <p>{item.name}</p>
          <img  
          id={watchlist}
           src={item.watchlist}
            onClick={()=>{addToWatchlist(index)}}/>
          </div>

        </div>
       )} 
      </div>

       
      
      <div className={cssName}>
          <img 
          src='/close.png'
          width="40"
          id='close-btn'
          onClick={()=>{
            setCssName('selected')
            setId('')
            setWatchlist('watchlist-image')
            }}/>

          {selected.map((item,index)=>
            <div key={index} id="s-movies">
              <img src={item.image} width="25"/> 
              <h3>{item.name}</h3>
            </div>
          )}

      </div>

    </div>

    </>
  )
}

export default App