import React, {Component} from 'react';
import {fetchStream} from '../../actions';
import {connect} from 'react-redux';

class StreamShow extends Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  renderTitle = () => {
    if(!this.props.stream){
      return <div>loading...</div>
    }
    return (
        <div>  
          <h1>
            Title: {this.props.stream.title}
          </h1>
          <h5>
            Description: {this.props.stream.description}
          </h5>
        </div>)
  }

  render(){
    return (
    <div>
      {this.renderTitle()}
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow)
