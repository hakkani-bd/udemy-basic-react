import React from 'react'

const OutputContent = (props) =>{
    return(
        <div className='card-body'>
            <h5>Hello, {props.name}</h5>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Username : {props.username}</p>
        </div>
    )
}


export default OutputContent