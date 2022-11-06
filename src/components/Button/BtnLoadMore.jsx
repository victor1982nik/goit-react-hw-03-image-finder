import PropTypes from 'prop-types';
import { ButtonLoad } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ text, onClick }) => {
  return (
    <ButtonLoad type="button" onClick={onClick}>
      {text}
    </ButtonLoad>
  );
};

BtnLoadMore.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
