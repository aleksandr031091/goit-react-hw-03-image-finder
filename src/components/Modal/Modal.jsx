import scss from "./Modal.module.scss";

const Modal = ({ largeImage, closeModal }) => {
  return (
    <div className={scss.Overlay} onClick={closeModal}>
      <div className={scss.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
