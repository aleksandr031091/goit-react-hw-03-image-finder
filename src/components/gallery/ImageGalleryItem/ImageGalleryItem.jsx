import scss from "./imageGalleryItem.module.scss";

const ImageGalleryItem = ({ image, openModal, largeImage }) => {
  const { webformatURL } = image;
  return (
    <li
      className={scss.ImageGalleryItem}
      id={image.id}
      onClick={() => openModal(largeImage)}
    >
      <img src={webformatURL} alt="" className={scss.ImageGalleryItemImage} />
    </li>
  );
};
export default ImageGalleryItem;
