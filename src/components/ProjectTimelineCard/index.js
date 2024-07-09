// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'
const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails
  return (
    <div className="card-container">
      <img className="img" alt="project" src={imageUrl} />
      <div className="title-container">
        <h1 className="heading">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color=" #171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
