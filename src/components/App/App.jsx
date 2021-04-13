import { Component } from "react";
import scss from "./App.module.scss";

import API from "../utils/imageApi";
import Searchbar from "../Searchbar";
import ImageGallery from "../gallery/ImageGallery";
import LoaderImages from "../Loader";
import BottonLoadMore from "../Button";
import Modal from "../Modal";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isOpenModal: false,
    isLoading: false,
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query, images } = this.state;

    if (prevState.page !== page) {
      API.GetImages({ query, page }).then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
        }));
      });
    }

    if (prevState.images !== images && prevState.images.length !== 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  ////////////////////////////////////// modal //////////////////////////////////////////
  openModal = (largeImage) => {
    this.setState({ isOpenModal: true, largeImage });
    window.addEventListener("keydown", this.closeModal);
  };

  closeModal = (event) => {
    if (event.target === event.currentTarget || event.keyCode === 27) {
      this.setState({ isOpenModal: false });
      window.removeEventListener("keydown", this.closeModal);
    }
  };
  ////////////////////////////////////// modal //////////////////////////////////////////

  onSubmit = (query) => {
    this.setState({ query, isLoading: true });
    API.GetImages({ query })
      .then((response) => {
        this.setState({ images: response.data.hits });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  addPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, largeImage, isOpenModal, isLoading } = this.state;
    return (
      <div className={scss.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <LoaderImages />}
        {images.length > 0 && <BottonLoadMore addPage={this.addPage} />}
        {isOpenModal && (
          <Modal largeImage={largeImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
