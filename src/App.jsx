import React, { useRef, useState } from 'react'
import './App.css'
import SubEditor from './components/SubEditor';
import SubList from './components/SubList';
import Header from './components/Header';

const mockData = [
  {
    id: 0,
    canceled: false,
    icon:"▶️",
    content: "YOUTUBE",
    date: new Date().getTime()

  },
]

function App() {
  const [subscribe, setSubscribe]=useState(mockData)
  const idRef = useRef(1)

  const onCreate = (content) => {
    const newSubscribe = {
      
    }
  }


  
  return (
    <div className='App'>
      <Header />
      <SubEditor />
      <SubList />
    </div>
  );
}

export default App