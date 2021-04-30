import { ActivatedRoute } from '@angular/router';
import { MaterialService } from './../../services/material.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.scss']
})
export class ViewMaterialComponent implements OnInit {
  public material:any;
  
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any 
  
  dataSource:any;
  displayedColumns: string[]=["name","deliveryType","action2"]

  constructor(private materialService:MaterialService,private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {
 
    this.materialService.getMaterials().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.getMaterials();
    this.deleteMaterialById(this.route.snapshot.params.id);

  }

 async getMaterials(){
   await this.materialService.getMaterials().subscribe(
      data=>{
        this.material=data
      },
      err=>console.error(err),
      ()=>console.log('material loaded')
    );

  }

 async deleteMaterialById(id:number){
  await this.materialService.deleteMaterialById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })
   
  }

 async updateMaterialById(id:number,material:any){
    this.materialService.updateMaterialById(id,material);
  }

  filter(query:string){
    this.dataSource.filter =query.trim().toLowerCase();

  }
  
isActive: boolean=false;
switch(){
this.isActive = !this.isActive;

}
}
