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
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/vehicles',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getVehicle(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/vehicles/' + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  createVehicleRegistration(vehicle) {
    let body = JSON.stringify(vehicle);
    return this.http.post('/server/api/v1/vehicles', body, httpOptions);
  }
}
