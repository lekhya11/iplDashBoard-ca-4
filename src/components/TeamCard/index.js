import './index.css'

const TeamCard = props => {
  const {teamsList} = props
  const {name, teamImageUrl} = teamsList
  return (
    <div className="team-card">
      <img src={teamImageUrl} alt={name} className="team-image" />
      <h1>{name}</h1>
    </div>
  )
}

export default TeamCard
