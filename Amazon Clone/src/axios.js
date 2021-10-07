import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL
    baseURL: 'https://us-central1-challenge-4859f.cloudfunctions.net/api'
    // 'http://localhost:5001/challenge-4859f/us-central1/api'
});

export default instance;