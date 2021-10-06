import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import  '../src/styles/styles.css'
import Navbar from './components/Navbar'
function App(){
 

  return(
    <div className="main">
      <Navbar />
    </div>
  )
}

ReactDOM.render(<App />,document.querySelector('#root'))