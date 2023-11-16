import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
    venue,
  } = recentMatches
  return (
    <div className="card-list">
      <img src={competingTeamLogo} alt="logo" className="image" />
      <div>
        <h3>{competingTeam}</h3>

        <p>{venue}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
    </div>
  )
}

export default MatchCard
