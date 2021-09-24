import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import  '../src/styles/styles.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import gsap from 'gsap'
function App(){
  useEffect(()=>{
    gsap.from('.main',{
    y:'-100%',
    delay:1
  })
  
},[])
  return(
    <div className="main">
      <Navbar />
      <Header />
    </div>
  )
}

ReactDOM.render(<App />,document.querySelector('#root'))