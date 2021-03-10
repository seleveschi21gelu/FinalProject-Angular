import { DeliveryTypeService } from './../../delivery-type.service';
import { MaterialService } from './../../services/material.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  materialList: any;
  deliveryTypeList: any;
  materialForm!: FormGroup;
  validMessage: string = "";

  constructor(private materialService:MaterialService, private deliveryTypeService:DeliveryTypeService) { 
this.materialService.getMaterials().subscribe(material=>this.materialList = material);
this.deliveryTypeService.getDeliverysType().subscribe(deliveryType=>this.deliveryTypeList= deliveryType)

  }

  ngOnInit(): void {
    this.materialForm = new FormGroup({
    name:new FormControl('',Validators.required),
    deliveryType: new FormControl('',Validators.required)

    })
  }
  submitRegistration(){
    if(this.materialForm?.valid){
      this.validMessage = "Your material registration has been submitted. Thank you!";
      this.materialService.addMaterial(this.materialForm.value).subscribe(
        _data => {
          this.materialForm?.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting";
    }
  }
  

}
