import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';


const navItem = [
  {
    title: "Historique",
    link: "/Historique"
  }
]
const App = () => {

  return (
    <>
      <Header props={{navItem}} />
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App