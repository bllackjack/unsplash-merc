import axios from "axios";

const UNSPLASH_BASE_URL =
  process.env.NEXT_PUBLIC_UNSPLASH_API_URL || "https://api.unsplash.com/";

const instance = axios.create({
  baseURL: UNSPLASH_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_KEY}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
