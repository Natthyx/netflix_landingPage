import React from 'react';
function Download(props){
    return(
        <div className='description'>
        <div className='row'>
        <div className='image'>
        <img className='gif' src={props.img} alt="tv"></img>
        </div>
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
        </div>
        
        </div>
    )
}

export default  Download; 