import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <header className='Header'>
      <h2>나의 유료구독 목록</h2>
      <h1>{new Date().toLocaleDateString("ko-KR",{
        year: "numeric",
        month:"long",
        day:"numeric",
        weekday:"short",
      })}</h1>
    </header>
  )
}

export default Header