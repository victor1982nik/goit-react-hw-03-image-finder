import PropTypes from 'prop-types';

export const ImageGallery = ({ data, onClick }) => {
  return (
    <ul style={{ display: 'flex' }}>
      {data.map(item => {
        return (
          <li key={item.id}>
            <img src={item.small} alt="" width="150px" onClick={() => onClick(item.big)} />            
          </li>
        );
      })}
    </ul>
  );
};