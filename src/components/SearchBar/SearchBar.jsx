import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { BtnLabel, Button, Form, Input, Searchbar } from './SearchBar.styled';

export const SearchBar = ({ filter, onSubmit, onChange }) => {
  //console.log("filter", filter,"OnSubmit", onSubmit, "onChange", onChange);
  return (
    <Searchbar>
      <Form onClick={onSubmit}>
        <Button>
          <BtnLabel>
            <FaSearch />
          </BtnLabel>
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </Form>
    </Searchbar>
  );
};

SearchBar.propTypes = {
  filter: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

/*<button type="button" >
        <FaSearch />
      </button>
      <input
        type="filter"
        name="filter"
        value={filter}
        
      ></input>
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>*/
