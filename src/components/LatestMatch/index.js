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
        <h1>{competingTeam}</h1>
        <h3>{date}</h3>
        <p>{venue}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt="logo" className="image" />
      </div>

      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
