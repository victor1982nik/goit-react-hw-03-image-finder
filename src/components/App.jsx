import { Component } from 'react';
import { fetchData } from './Api/fetchData';
import { Box } from './App.styled';
import { BtnLoadMore } from './Button/BtnLoadMore';
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
    total: null,
    page: 1,
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handlerFormSubmit = async e => {
    e.preventDefault();
    const { filter, page } = this.state;
    if (this.state.filter === '') {
      this.setState({ error: 'По вашему запросу ничего не найдено' });
      return;
    }
    this.setState({ isLoading: true });
    try {
      const response = await fetchData(filter, page);

      this.setState({
        pictures: response.data.hits,
        total: response.data.total,
        page: 1,
        error: null,
      });
    } catch (error) {
      this.setState({ error: 'Что-то пошло не так, перезагрузите страницу' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleModal = bigPicture => {
    this.setState({ picture: bigPicture });
  };

  closeModal = () => {
    this.setState({ picture: null });
  };

  onClickLoadMore = async e => {
    const { filter, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await fetchData(filter, page + 1);

      this.setState(prevState => {
        return {
          pictures: [...prevState.pictures, ...response.data.hits],
          page: page + 1,
        };
      });
    } catch (error) {
      this.setState({ error: 'Что-то пошло не так, перезагрузите страницу' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  createRenderList() {
    const { pictures } = this.state;
    if (pictures) {
      return pictures.map(item => ({
        id: item.id,
        small: item.webformatURL,
        big: item.largeImageURL,
      }));
    }
  }

  render() {
    const { pictures, isLoading, filter, picture, error, total } = this.state;
    let options = this.createRenderList();

    return (
      <Box>
        <SearchBar
          filter={filter}
          onSubmit={this.handlerFormSubmit}
          onChange={this.handleFilter}
        ></SearchBar>
        {error && <div>{error}</div>}
        {options && <ImageGallery data={options} onClick={this.handleModal} />}
        {isLoading && <Loader />}
        {pictures.length > 0 && pictures.length < total && (
          <BtnLoadMore text="Load More" onClick={this.onClickLoadMore} />
        )}
        {picture && <Modal picture={picture} onClose={this.closeModal}></Modal>}
      </Box>
    );
  }
}
