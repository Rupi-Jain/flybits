import axios from 'axios';
const API_KEY = 'AIzaSyBChfiTkq2Ej94O9VPFy_J6ccyEq89rE74'



export function createBranches() {
  const branchAddress = [
     '5679 Hazeldean Rd, Stittsville, ON K2S 0P6',
     '457 Hazeldean Rd Unit 28, Kanata, ON K2L 1V1',
     '700 Eagleson Rd Unit 100, Kanata, ON K2M 2G9',
     '110 Earl Grey Dr, Kanata, ON K2T 1B7',
     '1270 Stittsville Main St #900, Stittsville, ON K2S 1B1',
     '1106 Klondike Rd, Kanata, ON K2K 0G1',
     '100 Bayshore Dr, Nepean, ON K2B 8C1',
     '2150 Robertson Rd Unit B1, Nepean, ON K2H 9S1',
     '1480 Richmond Rd, Ottawa, ON K2B 6S1'
  ]
  const address = [
    {
      location: {lat: 45.3001758, lng: -75.88572210000001},
      address: `457 Hazeldean Rd #28, Kanata, ON K2L 1V1, Canada`
    },
    {
      location: {lat: 45.3200216, lng: -75.83696020000001},
       address: `2150 Robertson Rd Unit B1, Nepean, ON K2H 9S1, Canada`
    },
    {
       location: {lat: 45.28593679999999, lng: -75.86804459999999},
      address: `700 Eagleson Rd #100, Kanata, ON K2M 2G9, Canada`
    },
    {
       location: {lat: 45.309834, lng: -75.9146373} ,
       address: `110 Earl Grey Dr, Kanata, ON K2T 1B7, Canada`
    },
    {
      location: {lat: 45.347237, lng: -75.8068316},
      address: `100 Bayshore Dr, Nepean, ON K2B 8S8, Canada`
    },
    {
      location: {lat: 45.2846744, lng: -75.9103236},
      address: `5679 Hazeldean Rd, Stittsville, ON K2S 0P6, Canada`
    },
    {
      location: {lat: 45.3624071, lng: -75.7899845},
      address: `1480 Richmond Rd, Ottawa, ON K2B 6V3, Canada`
    },
    {
       location: {lat: 45.3539349, lng: -75.9319328},
      address: `1106 Klondike Rd, Kanata, ON K2K 0G1, Canada`
    }
    
  ]

 
  let branchLocations = [] ;
  for(let key of branchAddress) {
    const locs = `https://maps.googleapis.com/maps/api/geocode/json?address=${key}&key=${API_KEY}`
    axios.get(locs)
    .then(res => {
      // console.log("locations", res)  
      const geo =  res.data.results[0];
      if (geo) {
        const locations =  geo.geometry.location  
        const address = geo.formatted_address;
        // console.log("locations", locations, address)
        branchLocations.push(locations)
  
      }
      
    })   
    // console.log("branchLocations", branchLocations.length)
  }
  return address
}
