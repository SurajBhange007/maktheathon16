import React, { useState } from 'react'
import '../Style/home.css';
import ChatWindow from './ChatWindow';
import PPTWindow from './PPTWindow';

export default function Home() {
  const [chatWindow, setChatWindow] = useState(true);//false
  return (
    <div className='home-wrapper'>
      {chatWindow && <div className='flex-item-1'><ChatWindow/></div>}
      <div className='flex-item-2'><PPTWindow /></div>

    </div>
  )
}
