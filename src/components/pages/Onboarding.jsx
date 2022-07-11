

const pageHeader = {
  textAlign: "center"
}
function Onboarding() {
  return (
    <div>
      <div className="card">
      <h2 style={ pageHeader }>Onboarding</h2>
        <label htmlFor="title">Title</label>
        <div className='input-group'>
          <input
          id="title"
            type='text'
            placeholder='Please enter your story title'
          />
        </div>
        <label htmlFor="firstAuthor">First Author</label>
        <div className='input-group'>
          <input
          id="firstAuthor"
            type='text'
            placeholder='Please enter your story first author'
          />
        </div>
        <label htmlFor="secondAuthor">Second Author</label>
        <div className='input-group'>
          <input
          id="secondAuthor"
            type='text'
            placeholder='Please enter your story second author'
          />
        </div>
        <label htmlFor="thirdAuthor">Third Author</label>
        <div className='input-group'>
          <input
          id="thirdAuthor"
            type='text'
            placeholder='Please enter your story third author'
          />
        </div>
        <label htmlFor="fouthAuthor">Fouth Author</label>
        <div className='input-group'>
          <input
          id="fouthAuthor"
            type='text'
            placeholder='Please enter your story fouth author'
          />
        </div>
        <label htmlFor="fouthAuthor">Expecpted Number of Viewers</label>
        <div className='input-group'>
          <input
          id="view"
            type='text'
            placeholder='Please enter numbers of viewers'
          />
        </div>
        <button className="btn btn-general">Submit</button>
    </div>
    </div>
  )
}

export default Onboarding
