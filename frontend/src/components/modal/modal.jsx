import React from 'react';
import '../../assets/stylesheets/modal.css';
import RequestContainer from '../request/request_container';
// import SignupFormContainer from '../session_form/signup_form_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component;
  
  switch (modal) {
    case 'request':
      component = <RequestContainer />;
      break;
    default:
      return null;
  }
// do something similiar to mern searchbar where modal closes when clicked outside
  return (
    <div className="modal-background"  >
      
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div onClick={closeModal} className="close-x"></div>
        { component }
      </div>
      
    </div>
  );
}

export default Modal