import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import axios from 'axios';
import BranchList from './BranchList';
import { getBranchData } from '../helpers/data';
const API_KEY = 'AIzaSyBChfiTkq2Ej94O9VPFy_J6ccyEq89rE74'


function Map() {
  const branches = getBranchData();
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.2846744, lng: -75.9103236}}
    >  
    {branches.map(branch => (      
      <Marker position={{
        lat: branch.location.lat, lng:branch.location.lng
      }}></Marker>
    ))} 
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Branch () {
  return (
    <div >
      <div style={{ width: '550px', height: '600px', marginLeft: '1.5em'}}>
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`} 
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
}

 