import React from 'react'

function Friends({friends}) {
  return (
    <>
    {friends.map((data)=>{
        return(
            <>
                <div className="friendname">
                <h2>{data.name}</h2>
            </div>
            </>
        )
    })}
            
            </>
  )
}

export default Friends