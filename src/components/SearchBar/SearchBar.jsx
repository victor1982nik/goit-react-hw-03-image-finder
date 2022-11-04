import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({ filter, onSubmit, onChange }) => {
  //console.log("filter", filter,"OnSubmit", onSubmit, "onChange", onChange);
  return (
    <header className="searchbar">
      <form className="form" onClick={onSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
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
