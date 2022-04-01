import React from "react";
import { withRouter, Link } from "react-router-dom";

class Nav extends React.Component {
  routeChange = event => {
    this.props.history.push(`/fam/${event.target.value}`)
  }

  portfolio = event => {
    event.preventDefault();
    window.open("https://adrianbriones.herokuapp.com/");
  }

  render () {
    return (
      <div className="nav">
        <div className="nBar">
          <Link to="/"><div className="nFt">Home</div></Link>
          <Link to="/show"><div className="nFt">Episode Search</div></Link>
          <select onChange={this.routeChange} className="sel">
            <option value="" hidden>Characters</option>
            <option value="1">Homer</option>
            <option value="2">Marge</option>
            <option value="3">Bart</option>
            <option value="4">Lisa</option>
            <option value="5">Maggie</option>
          </select>
          <div className="nFt endB" onClick={this.portfolio}>More By Adrian</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);