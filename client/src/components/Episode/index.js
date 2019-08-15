import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "../Nav";
import { findEpisode } from "../../actions/index";

class Episode extends React.Component {
  state = {
    userSeason: null,
    userEpisode: null,
    epList: [0],
    ep: [],
    seasonPicked: false,
    epPicked: false,
    show: false,
    noShow: false
  }

  //When user picks season #
  seasonSelect = event => {
    event.preventDefault();
    this.setState({
      userSeason: parseInt(event.target.value),
    }, () => {
    this.episodeList();
    })
  }

  //Based on user Season Pick, lists the corresponding # of episodes. Only after a season is picked.
  episodeList = () => {
    let seasonList = this.props.seasons.filter(season => this.state.userSeason === season.season)
    this.setState({
      epList: seasonList[0].episodes,
      seasonPicked: true
    })
  }

  //User picks a episode to search
  episodePicked = event => {
    event.preventDefault();
    this.setState({
      userEpisode: parseInt(event.target.value),
    }, () => {
      this.setState({
        epPicked: true
      })
    })
  }

  //When both a season and episode are picked, search for info once button is pressed.
  submitSeason = event => {
    event.preventDefault();
    if(this.state.userSeason !== (null || "") && this.state.userEpisode !== (null || "")) {
      this.props.findEpisode({
        userSeason: this.state.userSeason,
        userEpisode: this.state.userEpisode
      })
      .then(res => { 
        this.showInfo();
      })
      .catch(err => console.log(err));
    } 
  }

  //Displays episode info or error that info is unavailable.
  showInfo = () => {
    if(this.props.episode.length > 0 && this.props.episode[0] != null){
      this.setState({
        ep: this.props.episode[0],
      }, () => {
        this.setState({
          show: true
        })
      })
    } else {
      this.setState({
        noShow: true
      })
    }
  }

  render () {
    return (
      <div>
        <Nav></Nav>
        <div className="tvBack">
          <div className="tvBox">
            <h2 className="epH">Look Up Episode Details</h2>

            <div className="tvBox2">
              <div>
                <label className="epH lbl">Season</label>
                <select className="marLt select" 
                  onChange={this.seasonSelect}
                  value={this.state.value}
                  name="userSeason">
                    <option value="" hidden></option>
                  {this.props.seasons.map(season => (
                    <option value={season.season} key={season.season}>Season {season.season}</option>
                  ))}
                </select>  
              </div>
              {this.state.seasonPicked ? (
              <div>
                <label className="epH lbl">Episode</label>
                <select className="marLt select"
                  onChange={this.episodePicked}
                  name="userEpisode">
                    <option value="" hidden></option>
                  {this.state.epList.map(ep => (
                    <option value={ep} key={ep}>Episode {ep}</option>
                  ))}
                </select>
              </div>
              ):(
                <span></span>
              )}  
            </div>

            <br />
            {this.state.epPicked ? (
              <button onClick={this.submitSeason} className="dbtn">Details</button>
            ) : (
              <span></span>
            )}

            {this.state.noShow ? (
              <div className="error">
                <div className="font2">Sorry! Could not find info on the seleced episode.</div>
                <div className="font2">Please select another episode.</div>
              </div>
            ) : (
              <div>
                {this.state.show ? (
                  <div> 
                    <div className="flt">    
                      <div className="epH lbl nwMar">Title:</div>
                      <div className="font2">{this.state.ep.Title}</div>
                      <div className="epH lbl nwMar">Episode Date:</div>
                      <div className="font2">{this.state.ep.Released}</div>
                      <div className="epH lbl nwMar">Plot:</div>
                      <div className="font2">{this.state.ep.Plot}</div>
                    </div>
                  </div>
                ) : (
                <span></span>
                )}
              </div>
            )}
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    seasons: state.seasons,
    episode: state.episode
  }
}

const mapDispatchToProps = dispatch => {
  return { findEpisode: ep => dispatch(findEpisode(ep))}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Episode));