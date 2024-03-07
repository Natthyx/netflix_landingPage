import React from 'react';
function Description(props){
    return(
        <div className='description'>
        <div className='row'>
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
        <div className='image'>
        <img className='gif' src={props.img} alt="tv"></img>
        </div>
        </div>
        
        </div>
    )
}

export default  Description; 