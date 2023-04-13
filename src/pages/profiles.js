import React from 'react'
import './leaderboard.css';
import './style.css';

export default function profiles({ data }) {
  return (
        <div id="profile">
            {Item(data)}
        </div>
  )
}

function Item(datas){
    return (

        <>
            {
                datas.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}
