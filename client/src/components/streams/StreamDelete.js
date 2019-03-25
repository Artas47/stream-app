import React, {Component} from 'react';
import Modal from '../Modal';
import history from '../../history';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';

class StreamDelete extends Component{
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderContent = () => {
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream?'
    }
    return `Are you sure you want ti delete this stream titled '${this.props.stream.title}'`
  }

  render() {
    const onDismiss = () => {
      history.push('/');
    }

    const headerText = 'Delete a stream';
  
    const actions = (
      <div>
        <button onClick={() => {this.props.deleteStream(this.props.match.params.id)}} className='ui button negative'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link>
      </div>
    )
    console.log(this.props.stream)
    return (
        <Modal 
          contentText={this.renderContent()} 
          headerText={headerText} 
          actions={actions}
          onDismiss={onDismiss}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete); 
