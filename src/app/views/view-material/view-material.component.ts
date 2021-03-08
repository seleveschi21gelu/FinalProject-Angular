import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.scss']
})
export class ViewMaterialComponent implements OnInit {
  public material:any;

  constructor(private materialService:MaterialService) { }

  ngOnInit(): void {
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
  

}
