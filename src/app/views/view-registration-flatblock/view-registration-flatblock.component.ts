import { FlatblockService } from './../../services/flatblock.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration-flatblock',
  templateUrl: './view-registration-flatblock.component.html',
  styleUrls: ['./view-registration-flatblock.component.scss']
})
export class ViewRegistrationFlatblockComponent implements OnInit {

public flatblockRegistration: any;

  constructor(private flatblockService:FlatblockService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getFlatblockRegistration();
   
  }

getFlatblockRegistration(){
this.flatblockService.getFlatBlocks().subscribe(
  data=>{this.flatblockRegistration =data;
  },
  err=>console.error(err),
  ()=>console.log('flatblock loaded')
);
}



}
