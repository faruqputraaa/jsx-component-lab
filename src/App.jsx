import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './components/Welcome.jsx'
import UserCard from './components/UserCard.jsx'

function App() {

  return (

    <div>
      <Welcome />
      <UserCard name="Dharam" email="dharam@gmail.com" />

      <UserCard name="Rahul" email="rahul@gmail.com" />

    </div>

  );

}



export default App;