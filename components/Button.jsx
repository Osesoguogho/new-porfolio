import React from 'react'

const Button = ({text, design, handleClick}) => {
  return (
        <button onClick={()=> handleClick} className={design}>
            {text}
        </button>
  )
}

export default Button