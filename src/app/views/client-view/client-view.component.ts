import { ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  public client:any;

  constructor(private clientService:ClientService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getClients();
    this.deleteClientById(this.route.snapshot.params.id)
  }

  getClients(){
    this.clientService.getClients().subscribe(
      data =>{this.client=data},
      err=>console.error(err),
      ()=>console.log('client registered')
    );
  }

  deleteClientById(id:number){
    this.clientService.deleteClientById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })
   
  }
  updateClientById(id:number,fiscalBill:any){
    this.clientService.updateClientById(id,fiscalBill);
  
  }

}
