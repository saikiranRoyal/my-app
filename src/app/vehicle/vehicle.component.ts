import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vehicles:any=[]
  public term:string= "";
  public id:string="";
  

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



}
