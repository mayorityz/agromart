import axios from "axios";

export const post = async (url, data_) => {
  try {
    const { data } = await axios.post(url, data_);
    return data;
  } catch (error) {
    return error;
  }
};

export const get = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};
