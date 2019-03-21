import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';


class StreamList extends Component {
  componentDidMount = () => {
    this.props.fetchStreams()
  }
  render() {
    return (
      <div>
        {
          console.log(this.props.streams)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {streams: Object.values(state.streams)}
}


export default connect(mapStateToProps, {fetchStreams})(StreamList)
