// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {bannerUrl: '', LMD: '', RMlist: [], load: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const banner = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatchesList = data.recent_matches
    const caseChangeLMD = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const caseChangeRecentMatchList = recentMatchesList.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      bannerUrl: banner,
      LMD: caseChangeLMD,
      RMlist: caseChangeRecentMatchList,
      load: false,
    })
  }

  render() {
    const {bannerUrl, LMD, RMlist, load} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-can ${id}`}>
        {load && load && (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        )}
        {!load && (
          <>
            <img src={bannerUrl} alt="team banner" className="banner-image" />
            <LatestMatch matchDetails={LMD} key={LMD.id} />
            <ul className="matchCard-ul-can">
              {RMlist.map(each => (
                <MatchCard key={each.id} recentMatchDetails={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
