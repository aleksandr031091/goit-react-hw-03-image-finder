import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          largeImage={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
