import React, { useReducer, useRef } from 'react'
import "./Start.scss"


function Start({ setUserName }) {


    const inputRef = useRef()


    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value)
    }


    return (
        <div className='start'>
            <input
                className='start-input'
                placeholder='Enter your name'
                ref={inputRef}
            />
            <button className="start-button" onClick={handleClick}>Start</button>
        </div>
    )
}

export default Start
