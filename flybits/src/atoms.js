const { atom } =require('recoil');

export const lng = atom({
  key: "longitude",
  default: '',
})

export const lat = atom({
  key: "latitude",
  default: '',
})

export const promotions = atom({
  key: "promotions",
  default: '',
})

