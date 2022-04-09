import http from "../http-common";
class UserService {
 
  getAll(id) {
    return http.get(`/viewuser/${id}`);
  }
  create(data) {
    return http.post("/adduser", data);
  }
  update(id, data) {
    return http.put(`/updateuser/${id}`, data);
  }
  
}
export default new UserService();