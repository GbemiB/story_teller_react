
import { Link } from 'react-router-dom'

const image = {
    alignItems: "center", 
    marginBottom: "3rem"
}


function StoryTellerHome() {
    return (
        <div className="container">
            <img src="./story.jpeg" width="500rem" style={image} />
            <button className="btn btn-new-story" >
            <Link to='/onboard'>Tell a story now</Link>
            </button>
            <p class="caption">
                Storytelling is our obligation to the next generation, If all we are
                doing is marketing, we are doing a disservice, and not only to our profession,
                but to our children, and their children.  </p>
        </div>

    )
}
export default StoryTellerHome;
 