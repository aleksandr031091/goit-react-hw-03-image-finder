import axios from "axios";

const KEY = "20731826-485a6ef4f9f6fa0c1feddacae";

const GetImages = ({ query = "", page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default { GetImages };
