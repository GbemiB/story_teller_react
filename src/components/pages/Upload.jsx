

const pageHeader = {
  textAlign: "center"
}


const customCard = {
  padding: "13rem"
}

function Upload() {
  return (
    <div>
      <h2 style={pageHeader}>Story Uploading</h2>
      <div style={customCard}>
        <div className="card">
          <label htmlFor="title">Click here to upload story</label>
          <div className='input-group'>
            <input
              id="title"
              type='file'
              placeholder='Please enter your story title'
            />
          </div>

          <button className="btn btn-general">Submit</button>
        </div>
      </div>
    </div>

  )
}

export default Upload
