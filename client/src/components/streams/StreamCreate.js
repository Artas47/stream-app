import React, { Component } from 'react'
import { Field, reduxForm} from 'redux-form';

class StreamCreate extends Component {

  renderError = ({touched, error}) => {
    if(touched && error){
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    } 
    return 
  }

  renderInput = (formProps) => {  
    const className= `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete='off'/>
        <div>{this.renderError(formProps.meta)}</div>
      </div>
      )
  }

  onSubmit = (formValues) => {
     console.log(formValues)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
          <Field name='title' component={this.renderInput} label='Enter title'/>
          <Field name='description' component={this.renderInput} label='Enter description'/>
          <button className='ui button'>Submit</button>
        </form>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.title){
    errors.title = 'You must enter a title'
  }
  if(!formValues.description){
    errors.description = 'You must enter a description'
  }
  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);