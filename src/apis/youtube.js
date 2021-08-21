import axios from 'axios';

const KEY = 'AIzaSyD8lGi3JUJidf44OzQX_cPXyLU3zyoJtPE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});