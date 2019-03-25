import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      <div onClick={(e) => {e.stopPropagation()}} className='ui standard modal visivle active'>
        <div className='header'>
          {props.headerText}
        </div>
        <div className='content'>
          {props.contentText}
        </div>
        <div className='actions'>
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
