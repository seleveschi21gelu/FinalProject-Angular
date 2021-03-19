import { ActivatedRoute } from '@angular/router';
import { DeliveryTypeService } from '../../services/delivery-type.service';
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
  isAddMode:any;
  public materialRegistration:any;

  constructor(private materialService:MaterialService, private deliveryTypeService:DeliveryTypeService, private route:ActivatedRoute) {
  this.materialService.getMaterials().subscribe(material=>this.materialList = material);
  this.deliveryTypeService.getDeliverysType().subscribe(deliveryType=>this.deliveryTypeList= deliveryType)

  }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;         
    this.isAddMode = !id;

    this.materialForm = new FormGroup({
    name:new FormControl('',Validators.required),
    deliveryType: new FormControl('',Validators.required)

    })
  }
  submitRegistration(){
    let id = this.route.snapshot.params.id;
    // if(this.billsform?.valid){
    //   this.validMessage = "Your invoice registration has been submitted. Thank you!";
    if(id) this.materialService.updateMaterialById(id, this.materialForm.value);
    else this.materialService.addMaterial(this.materialForm.value).subscribe();
  }
  getMaterialRegistration(id:number){
    this.materialService.getMaterialById(id).subscribe(
      data=>{this.materialRegistration = data;
      },
      err=>console.error(err),
      ()=>console.log('bills loaded')
    );
  


    }}
