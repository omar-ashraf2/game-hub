import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8915fe07e2064919b887241e56ddf1d1",
  },
});
