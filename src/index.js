import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import  '../src/styles/styles.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
function App(){
  return(
    <div>
      <Navbar />
      <Header />
    </div>
  )
}

ReactDOM.render(<App />,document.querySelector('#root'))