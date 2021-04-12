const ImageGalleryItem = ({ image, openModal, largeImage }) => {
  const { webformatURL } = image;
  return (
    <li
      className="ImageGalleryItem"
      id={image.id}
      onClick={() => openModal(largeImage)}
    >
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
export default ImageGalleryItem;
