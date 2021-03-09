import { ProviderService } from './../../services/provider.service';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from './../../services/material.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-matertial-by-id',
  templateUrl: './view-matertial-by-id.component.html',
  styleUrls: ['./view-matertial-by-id.component.scss']
})
export class ViewMatertialByIdComponent implements OnInit {
  public materialRegistration:any;

  constructor(private materialService:MaterialService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMaterialRegistration(this.route.snapshot.params.id);
  }

  getMaterialRegistration(id:number){
    this.materialService.getMaterialById(id).subscribe(
      data=>{this.materialRegistration=data;
      },
      err=>console.error(err),
      ()=>console.log('material loaded')
    );

  }

}
