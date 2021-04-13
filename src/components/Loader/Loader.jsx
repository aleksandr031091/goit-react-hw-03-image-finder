import Loader from "react-loader-spinner";
import scss from "./Loader.module.scss";

const LoaderImages = () => {
  return (
    <div className={scss.loader}>
      <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default LoaderImages;
