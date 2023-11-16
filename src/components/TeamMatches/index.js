import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const teamBannerUrl = data.team_banner_url

    // console.log(teamBannerUrl)

    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.umpires,
    }

    this.setState({bannerUrl: teamBannerUrl, latestDetails: latestMatchDetails})

    const updatedRecentMatches = data.recent_matches.map(each => ({
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

    console.log(updatedRecentMatches)

    this.setState({recentMatches: updatedRecentMatches})
  }

  render() {
    const {bannerUrl, latestDetails, recentMatches} = this.state

    console.log(latestDetails)

    return (
      <div className="bg-container-team">
        <img src={bannerUrl} alt="banner" />
        <LatestMatch latestDetails={latestDetails} />
        <div className="cards-display">
          {recentMatches.map(each => (
            <MatchCard recentMatches={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches
