// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="latestMatchCan">
      <div className="text-cans">
        <div>
          <p className="team-head">{competingTeam} </p>
          <p className="date">{date} </p>
          <p className="paraHead">{venue}</p>
          <p className="paraHead">{result}</p>
        </div>

        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-logo"
        />
      </div>

      <hr className="break-line" />

      <div className="text-align-right">
        <p className="paraHead">First Innings</p>
        <p>{firstInnings}</p>
        <p className="paraHead">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="paraHead">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="paraHead">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
