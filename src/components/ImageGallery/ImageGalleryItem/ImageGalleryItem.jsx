import PropTypes from 'prop-types';
import { Image, ListItem } from '../ImageGallery.styled';

export const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <ListItem>
      <Image src={item.small} alt="" onClick={() => onClick(item.big)} />
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    small: PropTypes.string,
    big: PropTypes.string,
    key: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
