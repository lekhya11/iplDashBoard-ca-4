import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsList} = props
  const {id, name, teamImageUrl} = teamsList
  return (
    <li className="card-container">
      <Link to={`https://apis.ccbp.in/ipl/${id}`}>
        <div className="team-card">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <h1>{name}</h1>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
