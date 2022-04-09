import http from "../http-common";
class HotelService {
 
  getAll(id) {
    return http.get(`/viewhotel/${id}`);
  }
  create(data) {
    return http.post("/addHotel", data);
  }
  update(id, data) {
    return http.put(`/updatehotel/${id}`, data);
  }
  delete(id, data) {
      return http.delete(`/deletehotel/${id}`);
  }
  
}
export default new HotelService();