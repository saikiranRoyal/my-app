import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
 
   public vehicleForm:FormGroup = new FormGroup(
    {
       Vehicle:new FormControl(),
       manufacturer:new FormControl(),
       model:new FormControl(),
       type:new FormControl(),
       fuel:new FormControl(),
       image:new FormControl()

    }
   )
   public isEdit:boolean=false;
   public id:string="";
    
   constructor(private _vehicelService: VehicleService, private _activatedrouter:ActivatedRoute){
       this._activatedrouter.params.subscribe(
       (data:any)=>{
      //  condition important
        if(data.id){
          this.isEdit=true;
          this.id=data.id;
        }

        this._vehicelService.getvehicle(data.id).subscribe(
          (data2:any)=>{
            // to attach data to form
            this.vehicleForm.patchValue(data2);
          }
        )
       }
       )
   }

   submit(){
    console.log(this.vehicleForm.value)
     

    if(this.isEdit){

      this._vehicelService.updateVehicle(this.vehicleForm.value, this.id).subscribe(
        (data:any) => {
          alert("updated successfully")
        },
        (err:any) =>{
          alert('not created')
        }
      )
     }

     else{

      this._vehicelService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any) => {
          alert("created successfully")
        },
        (err:any) =>{
          alert('not created')
        }
      )
     }   


     }
    }




  
    

