import http from '../http-common';

class studentsServices {
  create(data) {
    return http.post("/students/insert", data);
  }

  getAll() {
    return http.get("/students/getAll");
  }

  updateStudents(id, data) {
    return http.put(`/students/update/${id}`, data);
  }

  deleteStudents(id) {
    return http.delete(`/students/delete/${id}`);
  }

  getStudentsById(id) {
    return http.get(`/students/getData/${id}`)
  }
}

export default new studentsServices();