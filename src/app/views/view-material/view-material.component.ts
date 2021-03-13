import { ActivatedRoute } from '@angular/router';
import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.scss']
})
export class ViewMaterialComponent implements OnInit {
  public material:any;

  constructor(private materialService:MaterialService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMaterial();
    // this.deleteMaterialById(this.route.snapshot.params.id);
  }

  getMaterial(){
    this.materialService.getMaterials().subscribe(
      data=>{
        this.material=data
      },
      err=>console.error(err),
      ()=>console.log('material loaded')
    );

  }

  
  // deleteMaterialById(id:number){
  //   this.materialService.deleteMaterialById(id).subscribe(
  //     data=>{
  //       this.material=data
  //     },
  //     err=>console.error(err),
  //     ()=>console.log('material deleted')
  //   );

  // }
  deleteMaterialById(id:number){
    this.materialService.deleteMaterialById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })
   
  }

  
  

}
