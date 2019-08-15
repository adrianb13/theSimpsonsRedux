import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "../Nav";

class Family extends React.Component {
  render () {
    return (
      <div>
        <div className="banBox">
          <div id="title"></div>
          <div id="intro">
            <iframe  
            src="https://www.youtube.com/embed/jfVBrpIhH60?autoplay=0"  
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="opening">
            </iframe> 
          </div>
        </div>
        <Nav></Nav>
        <div className="tBox">
          <div className="fBox">
            {this.props.simpsons.map(simpson => (
              <div className="cBox" key={simpson.id}>
                <Link to={"/fam/" + simpson.id}> 
                  <img src={simpson.image} alt={simpson.name} className="imgBox" />
                  <div className="font">{simpson.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div style={{clear:"both"}}></div>
        <div className="ftr">Images are a Copyright of TM Twentieth Century Fox Film Corporation and © 2019 FX Productions, LLC.</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { simpsons: state.simpsons }
}

export default withRouter(connect(mapStateToProps)(Family));