import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { fetchData } from './Api/fetchData';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    pictures: [],
    picture: null,
    error: null,
    filter: '',
    isLoading: false,
  };

  async componentDidMount() {      }

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handlerFormSubmit = async e => {
    e.preventDefault();    
    this.setState({ isLoading: true });
    try {
      const response = await fetchData(this.state.filter);
      console.log(response);
      this.setState({ pictures: response.data.hits });
    } catch (error) {
      this.setState({ error: "Что-то пошло не так" });
    } finally  {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { pictures, isLoading } = this.state;
    let options = [];
    if (pictures) {
      options = pictures.map(item => ({
        id: item.id,
        small: item.webformatURL,
        big: item.largeImageURL,
      }));
      //console.log('options', options);
    }

    return (
      <>        
        <form onSubmit={this.handlerFormSubmit}>
          <button type="submit">
            <FaSearch />
          </button>
          <input
            type="filter"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilter}
          ></input>
        </form>
        {isLoading && <Loader />}
        <ul style={{ display: 'flex' }}>
          {options.map(item => {
            return (
              <li key={item.id}>
                <img src={item.small} alt="" />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
