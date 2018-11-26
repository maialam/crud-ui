import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public vehicleReg;

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getVehicleReg(this.route.snapshot.params.id);
  }

  getVehicleReg(id:number){
    this.vehicleService.getVehicle(id).subscribe(
      data => {
        this.vehicleReg = data;
      },
      err => console.error(err),
      () => console.log('vehicle loaded')
    );
  }

}
