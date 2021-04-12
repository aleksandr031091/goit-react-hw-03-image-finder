const Modal = ({ largeImage, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
