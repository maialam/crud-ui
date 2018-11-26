import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class VehicleService {

  constructor(private http:HttpClient) { }

  getVehicles() {
    return this.http.get('/server/api/v1/vehicles');
  }

  getVehicle(id: number) {
    return this.http.get('/server/api/v1/vehicles/' + id);
  }

  createVehicleRegistration(vehicle) {
    let body = JSON.stringify(vehicle);
    return this.http.post('/server/api/v1/vehicles', body, httpOptions);
  }
}
