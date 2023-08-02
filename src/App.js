import React, { useState } from 'react'
import './App.css'
import Friends from './Friends';

const Data=[{
  id:1,
  name:"Ayush"
},{
  id:2,
  name:"Praesh"
},{
  id:3,
  name:"Nikhil"
},{
  id:4,
  name:"Malav"
},{
  id:5,
  name:"Yash"
},{
  id:5,
  name:"Nikhil"
}]

function App() {
  const[friend,setFriend]=useState(Data);
  return (
        <>
        <div className="app">
        <h2>Number Of Friends : {friend.length}</h2>
        <Friends friends={friend}/>
        <button onClick={()=>setFriend([])}>Clear All</button>
        <button onClick={()=>setFriend(Data)}>Get All</button>
        </div>
        </>
  )
}

export default App