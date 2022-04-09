import http from "../http-common";
class BookingService {
 
  getAll(id) {
    return http.get(`/viewbooking/${id}`);
  }
  create(data) {
    return http.post("/addbooking", data);
  }
  update(id, data) {
    return http.put(`/updatebooking/${id}`, data);
  }
  delete(id, data) {
      return http.delete(`/removebooking/${id}`);
  }
  
}
export default new BookingService();