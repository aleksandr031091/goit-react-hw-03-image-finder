import scss from "./Button.module.scss";

const BottonLoadMore = ({ addPage }) => {
  return (
    <>
      <button onClick={addPage} type="button" className={scss.button}>
        Load more
      </button>
    </>
  );
};
export default BottonLoadMore;
