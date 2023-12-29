import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar/Navbar.jsx'
import './index.css'
import Sidebar from './sidebar/Sidebar.jsx'
import MainComponent from './mainComponent/MainComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
   <Sidebar/>
   <MainComponent/>
  </React.StrictMode>,
)
