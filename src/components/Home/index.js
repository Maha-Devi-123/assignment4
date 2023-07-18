// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: [], load: true}

  componentDidMount() {
    this.fetchUrlToGetData()
  }

  fetchUrlToGetData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const changeCase = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamData: changeCase, load: false})
  }

  render() {
    const {teamData, load} = this.state
    return (
      <div className="Home-can">
        <div className="logoCan">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>
        {!load && (
          <ul className="ul-can">
            {teamData.map(each => (
              <TeamCard teamDetails={each} key={each.id} />
            ))}
          </ul>
        )}
        {load && load && (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        )}
      </div>
    )
  }
}
export default Home
