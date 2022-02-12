import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

const Modal = (props) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(props.children, el);
};

export default Modal;
