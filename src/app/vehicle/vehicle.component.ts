import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
 
  public term:string= "";
  public id:string="";
  public vehicles:Vehicle[]=[];
  

    constructor(private _vehicleservice:VehicleService, private router:Router){
      this._vehicleservice.getVehicles().subscribe(
         (data:any)=>{
          this.vehicles=data;
         },
         (err:any)=>{
          alert("Internal server error")
         }
      )
      
    }
   
    filter(){
      this._vehicleservice.getfiltervehicle(this.term).subscribe(
        (data:any)=>{
          this.vehicles=data
        },
        (err:any)=>{
            alert("server error")
        }
      )
    }

    // idno(){
    //   this._vehicleservice.getvehicle(this.id).subscribe(
    //     (data:any)=>{
    //       this.vehicles=data ;
    //     },
    //     (err:any)=>{
    //         alert("server error")
    //     }
    //   )
    // }
    public column:string="";
    public order:string="";

    sort(){
      this._vehicleservice.getsortvehicle(this.column,this.order).subscribe(
         (data:any)=>{
          this.vehicles=data;
         },
         (err:any)=>{
          alert("server error")
         }
      )
    }
    
page(pageNo:number){
  this._vehicleservice.getpagevehicle(pageNo).subscribe(
    (data:any)=>{
      this.vehicles=data;
     },
     (err:any)=>{
      alert("server error")
     }
  )
}

delete(id:any) {
  this._vehicleservice.deleteVehicle(id).subscribe(
    (data:any)=>{
      alert("Delete Successfully") ;
      location.reload();
     },
     (err:any)=>{
      alert("server error")
     }
  )
}
view(id:string){
   this.router.navigateByUrl( "/dashboard/vehicle-details/"+id)
}

edit(id:string){
  this.router.navigateByUrl("/dashboard/edit-vehicle/"+id)
}

}
