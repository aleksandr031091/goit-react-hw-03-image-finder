import { Component } from "react";

import API from "../utils/imageApi";
import Searchbar from "../Searchbar";
import ImageGallery from "../gallery/ImageGallery";
import Loader from "../Loader";
import BottonLoadMore from "../Button";
import Modal from "../Modal";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isOpenModal: false,
  };

  componentDidMount() {
    const { query, page } = this.state;
    this.onSubmit(query, page);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state.page;

    if (prevState.page !== page) {
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
    this.setState({ query });
    API.GetImages({ query }).then((response) => {
      console.log("response", response);
      this.setState({ images: response.data.hits });
    });
  };

  addPage = () => {
    const { query, page } = this.state;
    API.GetImages(query, page + 1).then((response) => {
      this.setState((prevState) => ({
        page: prevState.page + 1,
        images: [...prevState.images, ...response.data.hits],
      }));
    });
  };

  render() {
    const { images, largeImage, isOpenModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 0 && <BottonLoadMore addPage={this.addPage} />}
        {isOpenModal && (
          <Modal largeImage={largeImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
