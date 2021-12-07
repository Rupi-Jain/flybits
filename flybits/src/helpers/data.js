
const zones = [
  {
    name: 'Zone 1',
    branches: [`457 Hazeldean Rd #28, Kanata, ON K2L 1V1, Canada`],
    promotion: {
                caption: `Christmas 2021 offer, latest i-pad 10`,
                image: `Bank_offer1.jpg`
               }
  },
  {
    name: 'Zone 2',
    branches: [`700 Eagleson Rd #100, Kanata, ON K2M 2G9, Canada`, `110 Earl Grey Dr, Kanata, ON K2T 1B7, Canada` ],
    promotion: {
                caption: `Christmas 2021 offer, $300 cash back`,
                image: `Bank_offer2.jpg`
              },
  },
  {
    name: 'Zone 3',
    branches: [`100 Bayshore Dr, Nepean, ON K2B 8S8, Canada`],
    promotion:  {
                  caption: `Christmas 2021 offer, Amazon membership + $250 cash back`,
                  image: `Bank_offer3.jpg`
                }
  },
  {
    name: 'Zone 4',
    branches: [`1480 Richmond Rd, Ottawa, ON K2B 6V3, Canada`],
    promotion: {
                caption: `Christmas 2021 offer, Costco Executive membership + $250 cash back`,
                image: `Bank_offer4.jpg`
               }
  }
]

const promotions = [
  {
    caption: `Christmas 2021 offer, latest i-pad 10`,
    image: `Bank_offer1.jpg`
  },
  {
    caption: `Christmas 2021 offer, $300 cash back`,
    image: `Bank_offer2.jpg`
  },
  {
    caption: `Christmas 2021 offer, Amazon membership + $250 cash back`,
    image: `Bank_offer3.jpg`
  },
  {
    caption: `Christmas 2021 offer, Costco Executive membership + $250 cash back`,
    image: `Bank_offer4.jpg`
  }
]

const branchAddress = [
  {
    location: {lat: 45.3001758, lng: -75.88572210000001},
    address: `457 Hazeldean Rd #28, Kanata, ON K2L 1V1, Canada`,
    zone: 'Zone 1'
  },
  {
    location: {lat: 45.3200216, lng: -75.83696020000001},
     address: `2150 Robertson Rd Unit B1, Nepean, ON K2H 9S1, Canada`
  },
  {
     location: {lat: 45.28593679999999, lng: -75.86804459999999},
     address: `700 Eagleson Rd #100, Kanata, ON K2M 2G9, Canada`,
     zone: 'Zone 2'
  },
  {
     location: {lat: 45.309834, lng: -75.9146373} ,
     address: `110 Earl Grey Dr, Kanata, ON K2T 1B7, Canada`,
     zone: 'Zone 2'
  },
  {
    location: {lat: 45.347237, lng: -75.8068316},
    address: `100 Bayshore Dr, Nepean, ON K2B 8S8, Canada`,
    zone: 'Zone 3'
  },
  {
    location: {lat: 45.2846744, lng: -75.9103236},
    address: `5679 Hazeldean Rd, Stittsville, ON K2S 0P6, Canada`,
    Zone: ''
  },
  {
    location: {lat: 45.3624071, lng: -75.7899845},
    address: `1480 Richmond Rd, Ottawa, ON K2B 6V3, Canada`,
    zone: 'Zone 4'
  },
  {
     location: {lat: 45.3539349, lng: -75.9319328},
    address: `1106 Klondike Rd, Kanata, ON K2K 0G1, Canada`,
    zone: ''
  }
  
]

const setBranchData = (branch) => {
  localStorage.setItem('branches', JSON.stringify(branch))
}

const setZonehData = (zone) => {
  localStorage.setItem('zones', JSON.stringify(zone))
}

const getBranchData = () => {
  let values = []
  values = localStorage.getItem('branches')
  values = JSON.parse(values)
  return values
}

const getZoneData = () => {
  let values = []
  values = localStorage.getItem('zones')
  values = JSON.parse(values)
  return values
}

export  {promotions, branchAddress, getBranchData, getZoneData, zones};