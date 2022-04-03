import React, {useState} from 'react';
import Modal from 'react-modal';
import * as AiIcons from 'react-icons/ai'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function ModalWindow(props) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(true);
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Error"
        >
          <div className="error_wrapper">
            <div ref={(_subtitle) => (subtitle = _subtitle)}>{props.text}</div>
            <div onClick={closeModal} className='close_error'><AiIcons.AiFillCloseCircle /></div>
          </div>
        </Modal>
      </div>
    );
}
