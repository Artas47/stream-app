import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form';

class StreamCreate extends Component {
  renderInput = (formProps) => {  
    return (
      <div className='field'>
        <label>{formProps.label}</label>
        <input {...formProps.input}/>
      </div>
      )
  }

  onSubmit = (formValues) => {
     console.log(formValues)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
          <Field name='title' component={this.renderInput} label='Enter title'/>
          <Field name='description' component={this.renderInput} label='Enter description'/>
          <button className='ui button'>Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);