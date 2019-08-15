import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "../Nav";

class FamDetail extends React.Component {
  state = {
    simpson: this.props.simpson
  }
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="cont">
          <div className="iBack">
            <div className="iBox">
              <div className="iBox2">
                <img src={this.props.simpson.image} alt={this.props.simpson.name} className="iBox3" />
              </div>
              <div className="font">{this.props.simpson.name}</div>
            </div>
          </div>
        </div>
        <div className="dBack">
          <div className="dBox">
            <div className="dBox2">
              <h2 className="desc">Full Name: </h2>
              <div className="font2">{this.props.simpson.fullname}</div>
              <h2 className="desc">Description:</h2>
              <div className="font2 fjust">{this.props.simpson.description}</div> 
            </div>
            <div className="dBox2">
              <h2 className="desc">Random Facts:</h2>
              {this.props.simpson.random.map(fact => (
                <div className="font2 flt" key={fact.fact}>
                  <div><span className="blue">{"\u261b"} </span> {fact.fact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = (state, ownProps) => {
  let famId = ownProps.match.params.id;
  let simpson = {id: null, name: "", fullname: "", image: "", description: "", random: []}
  if (state.simpsons.length > 0) {
    simpson = Object.assign({}, state.simpsons.find(simpson => parseInt(simpson.id) === parseInt(famId)))
  }
  console.log(simpson)
  return {
    simpson: simpson
  }
}

export default withRouter(connect(mapStateToProps)(FamDetail));