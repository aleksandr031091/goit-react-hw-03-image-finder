import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import scss from "./imageGallery.module.scss";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={scss.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={image.id + index}
          image={image}
          largeImage={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape([]).isRequired),
  openModal: PropTypes.func.isRequired,
};
