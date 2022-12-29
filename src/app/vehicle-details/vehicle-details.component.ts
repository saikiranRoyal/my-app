import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService}  from '../vehicle.service'
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
 public vehicle:any={};

 constructor(private _activatedRouter:ActivatedRoute, _vehicleservice:VehicleService){
  this._activatedRouter.params.subscribe(
    (data:any)=>{
        _vehicleservice.getvehicle(data.id).subscribe(
          (data2:any)=>{
            this.vehicle=data2;
          }
        )
    }
  )
 }
}