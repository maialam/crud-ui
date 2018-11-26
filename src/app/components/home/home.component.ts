import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] =[
    'Vauxhall Astra 1.6 Cdi',
    'Renault Clio dCi 90 Auto',
    'Saab 9-3 1.9 TDI Linear',
    'Skoda Octavia 1.6 TDI SE',
    'Ford Mondeo 1.8 LX'
  ];
  vehicleform: FormGroup;
  validMessage: string = "";

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    registrationNumber: new FormControl('', Validators.required),
    purchasePrice: new FormControl('', Validators.required),
    purchaseDate: new FormControl('', Validators.required),
    contact: new FormControl()
  });
  }

  submitRegistration() {
    if(this.vehicleform.valid) {
      this.validMessage = "Your vehicle registration has been submitted. Thank you love!";
      this.vehicleService.createVehicleRegistration(this.vehicleform.value).subscribe(
        data => {
          this.vehicleform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please complete the form before submitting!";
    }
  }

}
