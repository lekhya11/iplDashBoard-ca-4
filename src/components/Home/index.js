import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getIPLTeams()
  }

  getIPLTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    const dataArray = data.teams
    const formattedData = dataArray.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamsData: formattedData})
  }

  render() {
    const {teamsData} = this.state
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-image"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        <ul className="ul-container">
          {teamsData.map(eachTeam => (
            <TeamCard teamsList={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
