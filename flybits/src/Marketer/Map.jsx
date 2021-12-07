import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import axios from 'axios';
import BranchList from './BranchList';
import { getBranchData } from '../helpers/data';
import { atom, useRecoilState } from 'recoil'
import { lng as lngAtom,  lat as latAtom} from '../atoms'

function Map() {
  const branches = getBranchData();
  const [lng, setLng] = useRecoilState(lngAtom)
  const [lat, setLat] = useRecoilState(latAtom)

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.2846744, lng: -75.9103236}}
      onClick={ev => {
        // console.log("latitide = ", ev.latLng.lat());
        // console.log("longitude = ", ev.latLng.lng());
        setLng(prev => ev.latLng.lng())
        setLat(prev => ev.latLng.lat())
      }}
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

export default function Branch (props) {
  return (
    <div >
      <div style={{ width: props.width, height: props.height, marginLeft: '1.5em'}}>
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
}

 