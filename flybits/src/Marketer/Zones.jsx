// import { Button, Form} from 'react-bootstrap'
import {useState} from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import {getBranchData, getZoneData, promotions} from '../helpers/data';
import Map from './Map'
import ZoneList from './ZoneList';

const Zones = () => {

  const zones = getZoneData()
  return (
    <div className="container">
      <div className="btn-create" style={{marginTop: '3em'}}>
        <h1>Zones</h1>
        <Link  to="/admin/newzone" className="btn btn-primary" style={{marginLeft: '20em'}}>Create New Zone</Link>
      </div>

      <div className="row g-2 zone">
        <div className="col-md-7 zone-main" style={{paddingTop: '2em'}}>
            {zones.map(zone => (      
              <ZoneList name={zone.name} zone={zone.branches} promotion={zone.promotion}></ZoneList>
            ))} 
        </div>
        <div class="col-md-3">
          <Map width='500px' height='600px'></Map>
        </div>
      </div> 
    </div>
  )

}

export default Zones