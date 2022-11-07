import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Button, Form, Input, Searchbar } from './SearchBar.styled';

export const SearchBar = ({ inputValue, onSubmit, onChange }) => {
  
  return (
    <Searchbar>
      <Form onSubmit={onSubmit}>
        <Button aria-label="search button">
          {/* <BtnLabel> */}
          <FaSearch />
          {/* </BtnLabel> */}
        </Button>
        <Input
          type="text"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="May contain only letters, apostrophe, dash and spaces."
          required
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={inputValue}
        />
      </Form>
    </Searchbar>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

