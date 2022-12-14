import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vehicles:any=[]
    constructor(private _vehicleservice:VehicleService){
      this._vehicleservice.getVehicles().subscribe(
         (data:any)=>{
          this.vehicles=data;
         },
         (err:any)=>{
          alert("Internal server error")
         }
      )
      
    }
    
}
