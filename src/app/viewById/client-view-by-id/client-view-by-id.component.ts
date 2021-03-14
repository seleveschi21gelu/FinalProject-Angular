import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-view-by-id',
  templateUrl: './client-view-by-id.component.html',
  styleUrls: ['./client-view-by-id.component.scss']
})
export class ClientViewByIdComponent implements OnInit {

  public clientRegistration:any;
  constructor(private clientService:ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClientById(this.route.snapshot.params.id);
  }

getClientById(id:number){
  this.clientService.getClient(id).subscribe(
    data=>{this.clientRegistration = data;
    },
    err=>console.error(err),
    ()=>console.log('client loaded')
  );
}


}
