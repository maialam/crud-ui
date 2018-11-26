import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public vehicles;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
        this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(
      data => { this.vehicles = data},
      err => console.error(err),
      () => console.log('vehicles loaded')
    );
  }

}
