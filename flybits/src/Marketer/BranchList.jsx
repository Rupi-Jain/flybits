import './style.css'
const BranchList = (props) => {
  return (
    <div className='branch-name' >
      <div>
      {props.name}
      </div>
      <div style={{color:'red'}}>
      {props.zone}
      </div>
      
    </div>
  )
}

export default BranchList