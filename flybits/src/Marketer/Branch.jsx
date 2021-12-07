import React, { useState, useEffect } from 'react';
import BranchList from './BranchList';
import { createBranches } from '../helpers/branches';
import Map from './Map'
import './style.css'
import { getBranchData } from '../helpers/data';

export default function Branch () {
  
  const branches = getBranchData()

  return (
    <div className="container">
      <div style={{marginTop: '3em'}}>
        <h1>Branches</h1>
      </div>
      <div className="branch">
        <div >
          {branches.map(branch => (      
            <BranchList name={branch.address} zone={branch.zone}></BranchList>
          ))} 
        </div>
        <div >
          <div style={{ width: '550px', height: '600px', marginLeft: '1.5em'}}>
            <Map width='500px' height='600px'></Map>
          </div>
        </div>
      </div>
    </div>
  );
}

 