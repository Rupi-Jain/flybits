import './style.css'
const ZoneList = (props) => {
  return (
    <div className='zone-name' >
      <div className="row g-2">
        <div className="col-md-9">
          <div>
            <h3>{props.name}</h3>
          </div>
          <div >
            <h6 style={{color:'blue'}}>Branches:</h6> {props.zone} 
          </div>
          <div style={{color:'red'}}>
            {props.promotion.caption}
          </div>
        </div>
        <div className="col-md-1">
          <img src={props.promotion.image} style={{heigth: '100px', width: '100px'}}></img>
        </div>
      </div>
    </div>
  )
}

export default ZoneList