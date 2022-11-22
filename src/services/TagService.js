import axios from "axios";

export class TagService {
  static baseUrl = `${process.env.REACT_APP_BACKEND_URL}/tags`;

  static getTags() {
    return axios.get(this.baseUrl).catch((error) => {
      throw error;
    });
  }

  static create(tag) {
    return axios.post(this.baseUrl, tag).catch((error) => {
      throw error;
    });
  }
}
