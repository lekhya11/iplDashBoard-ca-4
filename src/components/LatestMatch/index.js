import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestDetails
  return (
    <div className="background">
      <div>
        <h3>{competingTeam}</h3>
        <h3>{date}</h3>
        <p>{venue}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt="logo" className="image" />
      </div>

      <div>
        <h3>First Innings</h3>
        <p>{firstInnings}</p>
        <h3>Second Innings</h3>
        <p>{secondInnings}</p>
        <h3>Man Of The Match</h3>
        <p>{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
