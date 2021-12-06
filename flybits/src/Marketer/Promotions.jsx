
const Promotions = () => {

  const [branches, setBranches] = useState(null)
  const handleSubmit = () => {

  }

  const handleChange = (e) => {
 
  }

  return (
    <div>
    <div style={{marginTop: '3em'}}>
      <h1>Promotions</h1>
    </div>
    <div class="row g-2 zone">
      <form  class="col-md-5" onSubmit={handleSubmit}>
          <div >
            <label class="form-label mt-3">Please enter the caption for Promotion</label>
            <input class="form-control" type='text' name ='caption' placeholder="Caption" onChange={handleChange}/>
          </div>
          <div >
            <label class="form-label mt-3">Please select file for Promotion</label>
            <input class="form-control mb-3" type='text' name='time' placeholder="File..." onChange={handleChange}/>
          </div>
          <div>
            <button class="form-control" type="submit" class="btn btn-primary" name='save'>Save</button>
        </div>
      </form>
      <div class="col-md-5">
      </div>
      </div>
      
    </div>
  )

}

export default Zones