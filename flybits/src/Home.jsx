import { Link } from 'react-router-dom'
import './App.css'
function Home() {
  return (
    <div className="home">
      <div>
        <h1>Welcome to Flybits</h1>
      </div>
      <div className="btns">
        <Link  to="/branch" className="btn btn-dark fs-5 fw-bolder me-5" style={{width: '200px'}} >Branches</Link>
        <Link  to="/zones" className="btn btn-dark fs-5 fw-bolder ms-5" style={{width: '200px'}}>Zones</Link>
      </div>
    </div>
  )
}

export default Home