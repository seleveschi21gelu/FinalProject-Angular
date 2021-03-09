import { ActivatedRoute } from '@angular/router';
import { ProviderService } from './../../services/provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-provider-by-id',
  templateUrl: './view-provider-by-id.component.html',
  styleUrls: ['./view-provider-by-id.component.scss']
})
export class ViewProviderByIdComponent implements OnInit {
  public providerRegistration:any;

  constructor(private providerService:ProviderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
this.getProviderById(this.route.snapshot.params.id);
  }

  getProviderById(id: number){
    this.providerService.getProvidersById(id).subscribe(
      data=>{this.providerRegistration=data;
      },
      err=>console.error(err),
      ()=>console.log('provider loaded')
    );
  }
 
}
