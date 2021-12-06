// import { Button, Form} from 'react-bootstrap'
import {useState} from 'react'
import Select from 'react-select'
import {getBranchData, getZoneData, promotions} from '../helpers/data';
import Map from './Map'

const NewZone = () => {

  const [branches, setBranches] = useState(null)
  const [zone, setZone] = useState('')
  const [promotion, setPromotion] = useState(null)
  const allBranches = getBranchData();
  const [mode, setMode] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const newZone = {
      name: zone,
      branches,
      promotion
    }
    console.log(newZone);
    let zones = getZoneData();
    zones.push(newZone)
    localStorage.setItem('zones', JSON.stringify(zones))
    zones = getZoneData();
    console.log("zone", zones)
    
  }

  const handleChange = (e) => {
    const branches = []
    for(let branch of e) {
      branches.push(branch.value)
    }
    setBranches(prev => branches)
  }
  const handleChangePromos = (e) => {
    console.log("vale", e.value)
    setPromotion(prev => e.value)
  }
  const handleChangeZone = (e) => {
    console.log("zone", e.target.value)
    setZone(prev => e.target.value)
  }

  let options = []
  for (let branch of allBranches) {
    options.push({value: branch.address, label: branch.address})
  }

  let promos = []
  console.log("prom", promotions)
  for (let promotion of promotions) {
   
    promos.push({value: promotion, label: promotion.caption})
  }

  return (
    <div className="container">
    <div style={{marginTop: '3em'}}>
      <h1>Zones</h1>
    </div>
    <div style={{}}></div>
    <div className="row g-2 zone">
      <form  className="col-md-7 zone-main" onSubmit={handleSubmit}>
          <div >
            <label className="form-label">Enter name for Zone</label>
            <input className="form-control mb-3" type='text' name ='Zone' placeholder="Zone" onChange={handleChangeZone}/>
          </div>
          <div >
            <label className="form-label">Please select Branches for Zone</label>
            <Select
              closeMenuOnSelect={false}
              options={options}
              isMulti
              onChange={handleChange}
            />
          </div>
          <div >
            <label className="form-label mt-3">Please select Promotion for Zone</label>
            <Select className="mb-5"
              closeMenuOnSelect={true}
              options={promos}
              onChange={handleChangePromos}
            />
          </div>
          <div>
            <button class="form-control mt-5" type="submit" class="btn btn-primary" name='save'>Save</button>
        </div>
      </form>
      <div class="col-md-3">
        <Map></Map>
      </div>
      </div>
    
    
    </div>
  )

}

export default NewZone