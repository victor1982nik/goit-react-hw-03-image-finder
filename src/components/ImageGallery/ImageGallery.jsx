import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data, onClick }) => {
  return (
    <List>
      {data.map(item => {
        return <ImageGalleryItem key={item.id} item={item} onClick={onClick} />;
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      small: PropTypes.string,
      big: PropTypes.string,
      key: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

// <ListItem key={item.id}>
//   <Image src={item.small} alt="" onClick={() => onClick(item.big)} />
// </ListItem>
