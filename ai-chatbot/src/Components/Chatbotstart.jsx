import React from 'react'
import './Chatbotstart.css'

const Chatbotstart = ({onStartChat}) => {
  return (
    <div className='start-page'>
        <button className='start-page-btn' onClick={onStartChat}>Chat AI</button>
        </div>
  )
}

export default Chatbotstart