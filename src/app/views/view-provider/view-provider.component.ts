import { ProviderService } from './../../services/provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-provider',
  templateUrl: './view-provider.component.html',
  styleUrls: ['./view-provider.component.scss']
})
export class ViewProviderComponent implements OnInit {

  public provider: any;
  constructor(private providerService :ProviderService) { }

  ngOnInit(): void {
  }

  getFlatblockRegistration(){
    this.providerService.getProviders().subscribe(
      data=>{this.provider =data;
      },
      err=>console.error(err),
      ()=>console.log('Provider loaded')
    );
}
}