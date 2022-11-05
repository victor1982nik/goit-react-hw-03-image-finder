import { Component } from 'react';
import { fetchData } from './Api/fetchData';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    pictures: [],
    picture: null,
    error: null,
    filter: '',
    isLoading: false,
  };

  async componentDidMount() {}

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handlerFormSubmit = async e => {
    e.preventDefault();
    // if (this.state.filter === '') {
    //   this.setState({ error: 'Что-то пошло не так' });
    //   return;
    // }
    this.setState({ isLoading: true });
    try {
      const response = await fetchData(this.state.filter);

      this.setState({ pictures: response.data.hits });
    } catch (error) {
      this.setState({ error: 'Что-то пошло не так' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleModal = bigPicture => {
    this.setState({ picture: bigPicture });
    //console.log(bigPicture);
  };

  render() {
    const { pictures, isLoading, filter, picture, error } = this.state;
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
        <SearchBar
          filter={filter}
          onSubmit={this.handlerFormSubmit}
          onChange={this.handleFilter}
        ></SearchBar>
        {error && <div>{this.state.error}</div>}
        {isLoading && <Loader />}
        <ImageGallery data={options} onClick={this.handleModal}></ImageGallery>
        {picture && <Modal picture={picture}></Modal>}
      </>
    );
  }
}
