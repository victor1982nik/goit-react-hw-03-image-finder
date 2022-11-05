import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ picture }) => {
  return (
    <Overlay>
      <ModalWindow>
        <img src={picture} alt="" />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  picture: PropTypes.string.isRequired,
};
