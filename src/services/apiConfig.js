import axios from "axios";

let apiUrl;
// this reassigns the existing variable
const apiUrls = {
  production: "www.cat-crud-api.heroku",
  development: "http://localhost:3000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
    baseURL: apiUrl,
});

export default api;


