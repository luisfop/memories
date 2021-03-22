import axios from 'axios';


const url = 'http://localhost:5000/posts';


export const fetchPosts = () => {
    const response = axios.get(url);
    return response;
    
}