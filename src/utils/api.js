import http from "../utils/http";

const API = {
  login:'/users/login',
}
export function getUsersByPage(){
  return http.post('/users/getUserByPage')
}
export default API;