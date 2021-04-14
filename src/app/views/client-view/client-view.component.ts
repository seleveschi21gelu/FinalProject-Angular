import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any 
  
  dataSource:any;
  displayedColumns: string[]=["name","county","cif","telephone","address","email","action","action2"]

  public client:any;

  constructor(private clientService:ClientService, private route:ActivatedRoute) { 
   
  
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.getClients();
    this.deleteClientById(this.route.snapshot.params.id)
  }

 async getClients(){
 await   this.clientService.getClients().subscribe(
      data =>{this.client=data},
      err=>console.error(err),
      ()=>console.log('client registered')
    );
  }

 async deleteClientById(id:number){
  await this.clientService.deleteClientById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })
   
  }
 async updateClientById(id:number,fiscalBill:any){
    this.clientService.updateClientById(id,fiscalBill);
  
  }
  filter(query:string){
    this.dataSource.filter =query.trim().toLowerCase();

  }

isActive: boolean=false;
switch(){
this.isActive = !this.isActive;

}

}
