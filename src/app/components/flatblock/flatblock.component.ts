import { ConstructiontypeService } from './../../services/constructiontype.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlatblockService } from './../../services/flatblock.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-flatblock',
  templateUrl: './flatblock.component.html',
  styleUrls: ['./flatblock.component.scss']
})
export class FlatblockComponent implements OnInit {

flatblockList : any;
  constructiontypeList:any;
  flatblockForm!: FormGroup;
  validMessage: string ="";

  constructor(private flatblockService:FlatblockService,
    private constructiontypeService:ConstructiontypeService) {

    this.flatblockService.getFlatBlocks().subscribe(flatblock => this.flatblockList= flatblock);
    this.constructiontypeService.getConstructioType().subscribe(constructiontype => this.constructiontypeList = constructiontype)

   }

  ngOnInit(): void {
    this.flatblockForm = new FormGroup({
    name:new FormControl('',Validators.required),
    constructionType: new FormControl('',Validators.required)


    })

  }

  submitRegistration(){
    if(this.flatblockForm?.valid){
      this.validMessage = "Your bike registration has been submitted. Thank you!";
      this.flatblockService.addFlatBlock(this.flatblockForm.value).subscribe(
        (_data: any) => {
          this.flatblockForm?.reset();
          return true;
        },
        (error: any) => {
          return throwError(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
