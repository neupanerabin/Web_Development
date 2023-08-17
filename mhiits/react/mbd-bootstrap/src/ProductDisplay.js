import React from 'react'

const ProductDisplay = () => {
    const login = false
  return (
    <div>
        {
            (() => {
                if (login){
                    return <h1>Welcome to our website</h1>
                }
                
                else{
                    return <h2>Please enter valid credentials</h2>
                }
            })()
        }


    </div>
  )
}

export default ProductDisplay