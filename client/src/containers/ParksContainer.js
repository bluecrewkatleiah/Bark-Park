import React, { Component } from 'react'
import Parks from '../components/Parks'
// import { connect } from 'react-redux'

class ParksContainer extends Component {
  componentDidMount(){
    this.props.fetchParks();
  }

  
  render(){
    return <div className="Parks-container">
        <Parks 
          deletePark={this.props.deletePark}
          editPark={this.props.editPark} 
          parks={this.props.parks}
          // checkIn={this.props.checkIn}
          fetchCurrentUsers={this.props.fetchCurrentUsers} />
        
        

      </div>;
  }
}

// TODO: seperation of concerns for parks/store 

// const mapStateToProps = (state) => {s
//   return {parks: state.parkReducer.parks}
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPark: (park) => dispatch({type: 'ADD_PARK', payload: park})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)

export default ParksContainer