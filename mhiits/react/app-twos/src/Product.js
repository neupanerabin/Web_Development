import React from 'react'

const Product = (props) => {
    return (
        <div class='product'>
        
        <h1>{props.title}</h1>
        <img src={props.thumbnail} alt={props.title}></img>
        <h2>Rs: {props.price}</h2>
        <h1>Stock: {props.stock}</h1>
        <h3>Description : {props.description}</h3>
        <hr></hr>



        
        </div> 
  )
}

export default Product