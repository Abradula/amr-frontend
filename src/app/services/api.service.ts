import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  sendLims(data: any) {
    return this.http.post(`${this.baseUrl}/lims`, data);
  }

  sendAmu(data: any) {
    return this.http.post(`${this.baseUrl}/amu`, data);
  }

  sendIoT(data: any) {
    return this.http.post(`${this.baseUrl}/iot`, data);
  }

  getFacilities() {
    return this.http.get(`${this.baseUrl}/facilities`);
  }
}