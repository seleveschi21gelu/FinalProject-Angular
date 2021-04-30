
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryTypeService } from 'src/app/services/delivery-type.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-delivery-type-view',
  templateUrl: './delivery-type-view.component.html',
  styleUrls: ['./delivery-type-view.component.scss']
})
export class DeliveryTypeViewComponent implements OnInit {
  
  public deliveryType: any;
   
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any 
  
  dataSource:any;
  displayedColumns: string[]=["name","action2"]

  constructor(private deliveryTypeService:DeliveryTypeService,
    private route: ActivatedRoute, private router: Router) {
      
     }

  ngOnInit(): void {
    this.deliveryTypeService.getDeliverysType().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.getDeliveryTypes();
    this.deleteDeliveryTypeById(this.route.snapshot.params.id);
  }

 async getDeliveryTypes(){
   await this.deliveryTypeService.getDeliverysType().subscribe(
      data =>{
        this.deliveryType=data
      },
      err=>console.error(err),
      ()=>console.log('delivery types loaded')
    );
  }

 async deleteDeliveryTypeById(id:number) {
   await this.deliveryTypeService.deleteDeliveryTypeById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })

  }
 async updateDeliveryTypeById(id:number,deliveryType:any){
    this.deliveryTypeService.updateDeliveryTypeById(id,deliveryType);
  }
  filter(query:string){
    this.dataSource.filter =query.trim().toLowerCase();

  }
  
isActive: boolean=false;
switch(){
this.isActive = !this.isActive;

}
}
