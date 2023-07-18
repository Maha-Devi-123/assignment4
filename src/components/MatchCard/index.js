// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = recentMatchDetails

  const colorOfResult = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="matchcard-can">
      <img
        className="team-logo-pic"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name"> {competingTeam} </p>
      <p className="match-status">{result}</p>
      <p className={`team-name ${colorOfResult}`}> {matchStatus}</p>
    </li>
  )
}

export default MatchCard
