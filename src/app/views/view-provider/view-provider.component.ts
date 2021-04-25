import { ActivatedRoute } from '@angular/router';
import { ProviderService } from './../../services/provider.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-provider',
  templateUrl: './view-provider.component.html',
  styleUrls: ['./view-provider.component.scss']
})
export class ViewProviderComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any 
  
  dataSource:any;
  displayedColumns: string[]=["name","description","bank","iban","country","cif","telephone","address","action","action2"]

  public provider: any;
  constructor(private providerService :ProviderService,private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.providerService.getProviders().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.getProviderRegistration();
    this.deleteProviderById(this.route.snapshot.params.id)
  }

 async getProviderRegistration(){
   await this.providerService.getProviders().subscribe(
      data=>{this.provider =data;
      },
      err=>console.error(err),
      ()=>console.log('Provider loaded')
    );
}

async deleteProviderById(id:number){
  this.providerService.deleteProviderById(id).
  subscribe(
    (data) =>{
      console.log(data);
      this.ngOnInit();
    })
 
}
async updateProviderById(id:number,provider:any){
  this.providerService.updateProviderById(id,provider);

}

filter(query:string){
  this.dataSource.filter =query.trim().toLowerCase();

}

isActive: boolean=false;
switch(){
this.isActive = !this.isActive;

}

}