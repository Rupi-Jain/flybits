import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import Map from './Marketer/Map'
import './App.css'
import { getBranchData, getZoneData, promotions } from './helpers/data'
import { atom, useRecoilState } from 'recoil'
import { lng as lngAtom,  lat as latAtom, promotions as promotionsAtom} from './atoms'
import Promotions from "./Promotions"


function Home() {
  const [lat, setLat] = useRecoilState(latAtom)
  const [lng, setLng] = useRecoilState(lngAtom)
  const [promotions, setPromotions] = useRecoilState(promotionsAtom)
  const [mode, setMode] = useState('Hide')
  const latRef = useRef(null)
  const lngRef = useRef(null)
 
  const zones = getZoneData()
  const branches = getBranchData()
  
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // let distance;
    const promos = []
    for(let branch of branches) {
      const lat1 = Number(branch.location.lat);
      const lng1 = Number(branch.location.lng)
      const distance = getDistanceFromLatLonInKm(lat1, lng1, lat, lng )
      if (distance <= 5){
        const promotions = getPromotions(branch.zone)
        
        if (promotions) {
          promos.push(promotions)
        }
      }       
    }
    console.log("promos", promos)
    setPromotions(prev => promos)
    setMode(prev => 'Show')
  }

  const getPromotions = (name) => {
    for(let zone of zones) {
      if (zone.name === name ) {
        return zone
      }
    }
    return null
  }
  const handleClear = (e) => {
    latRef.current.value = "";
    lngRef.current.value = "";
  }
  const handleChangeLat = (e) => {
    setLat(prev => e.target.value)
  }
  const handleChangeLng = (e) => {
    setLng(prev => e.target.value)
  }

  return (
    <div className="home">
      <div>
        <h1>Welcome to Flybits</h1>
      
      </div>
      <div className="row g-2" style={{marginTop: '5em'}}>
        <form  className="col-md-7 main" onSubmit={handleSubmit}>
            <div >
              <label className="form-label">Enter Longitude</label>
              <input className="form-control mb-3" ref={lngRef} type='text' value={lng} name ='Zone' placeholder="" onChange={handleChangeLat}/>
            </div>
            <div >
              <label className="form-label">Enter Latitude</label>
              <input className="form-control mb-3" type='text' ref={latRef} value={lat} name ='Zone' placeholder="" onChange={handleChangeLng}/>
            </div> 
            <div>
              <button class="form-control mt-5" type="submit" class="btn btn-primary" name='save'>Enter</button>
              <Link to='./home/promotions' class="mt-5 ms-5"   name='save'>Check Promotions</Link>
          </div>
        </form>
        <div class="col-md-3">
          <Map width='400px' height='400px'></Map>
        </div>
      </div>
      <button class="form-control mt-5" onClick={handleClear} class="btn btn-primary ms-5" name='clear'>Clear</button>
    </div>
  )
}

export default Home