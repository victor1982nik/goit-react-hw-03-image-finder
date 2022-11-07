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
    input: '',
  };

  async componentDidUpdate(_, prevState) {    
    const {filter, page}  = this.state;   
    if (prevState.page !== page || prevState.filter !== filter) {
      try {
        this.setState({ isLoading: true });
        const response = await fetchData(filter, page);
       console.log(page, prevState.pictures, response.data.hits);
  //     if(!response) {return}
       this.setState({
         pictures: [...prevState.pictures, ...response.data.hits],         
         total: response.data.total,  
       });
     } catch (error) {
       this.setState({ error: 'Что-то пошло не так, перезагрузите страницу' });
     } finally {
       this.setState({ isLoading: false });
     }
    }
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handlerFormSubmit = e => {
    e.preventDefault();
   // debugger;
     const { input } = this.state;
        if (this.state.input === this.state.filter) {
          return;
        }
    
    this.setState({ 
      filter: input,
      page: 1,
      pictures: [],
      total: null
     });       
   };

  handleModal = bigPicture => {
    this.setState({ picture: bigPicture });
  };

  closeModal = () => {
    this.setState({ picture: null });
  };

  onClickLoadMore = async e => {    
    this.setState(prevState => { 
      return {      
      page: prevState.page + 1,
    }});    
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
    const { pictures, isLoading, input, picture, error, total } = this.state;
    let options = this.createRenderList();

    return (
      <Box>
        <SearchBar
          inputValue={input}
          onSubmit={this.handlerFormSubmit}
          onChange={this.handleInput}
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
