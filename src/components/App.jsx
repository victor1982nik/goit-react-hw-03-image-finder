import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const API_KEY = '30096980-3a3c0320a6f5f515df3804209';
const URL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    pictures: [],
    picture: null,
    error: null,
    filter: '',
  };

  async componentDidMount() {
    // try {
    //   const response = await axios.get(
    //     `${URL}/?key=${API_KEY}&q=blue+flowers&image_type=photo`
    //   );
    //   this.setState({ pictures: response.data.hits });
    // } catch (error) {
    //   this.setState({ error: error.message });
    // }
  }

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handlerFormSubmit = async e => {
    e.preventDefault();
    //console.log(this.state.filter);
    try {
      const response = await axios.get(
        `${URL}/?key=${API_KEY}&q=${this.state.filter}&page=1&image_type=photo&orientation=horizontal&per_page=12`
      );
      //console.log(response);
      this.setState({ pictures: response.data.hits });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { pictures } = this.state;
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
        <div>React template</div>
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
        <ul style={{ display: 'flex' }}>
          {options.map(item => {
            return (
              <li key={item.id}>
                <img src={item.small} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
