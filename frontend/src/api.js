import axios from "axios";
const BASE_URL="http://localhost:8080"
export async function uploadFile(data){
    return await axios.post(`${BASE_URL}/file/upload`,data);
}
export async function postBlog(data){
    return await axios.post(`${BASE_URL}/blog`,data);
}
export async function getBlogs(){
    return await axios.get(`${BASE_URL}/blog`);
}