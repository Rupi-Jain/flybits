import './App.css'
const PromotionsList = (props) => {
  console.log("props", props)
  return (
    <div >
      <div>
      {props.caption}
      </div>
      <div style={{color:'red'}}>
        <img src={props.image} style={{heigth: '100px', width: '100px'}}></img>
      </div>
      
    </div>
  )
}

export default PromotionsList