import { FlatblockService } from './../../services/flatblock.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-flatblock-by-id',
  templateUrl: './view-flatblock-by-id.component.html',
  styleUrls: ['./view-flatblock-by-id.component.scss']
})
export class ViewFlatblockByIdComponent implements OnInit {
public flatblockRegistration:any;

  constructor(private flatblockService:FlatblockService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getFlatblockById(this.route.snapshot.params.id);
  }
  getFlatblockById(id: number){
    this.flatblockService.getFlatblockById(id).subscribe(
      data=>{this.flatblockRegistration=data;
      },
      err=>console.error(err),
      ()=>console.log("flatblock loaded")
    );
  }

}
