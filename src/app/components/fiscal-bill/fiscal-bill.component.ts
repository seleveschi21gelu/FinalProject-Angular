import { FiscalBillService } from './../../services/fiscal-bill.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-fiscal-bill',
  templateUrl: './fiscal-bill.component.html',
  styleUrls: ['./fiscal-bill.component.scss']
})
export class FiscalBillComponent implements OnInit {
  fiscalBillList:any;

  fiscalBillForm !: FormGroup;
  validMessage : string = "";

  constructor(private fiscalBillService:FiscalBillService) {
   }

  ngOnInit(): void {
    this.fiscalBillForm = new FormGroup({
      provider:new FormControl('',Validators.required),
      cif: new FormControl('',Validators.required),
      socialCapital: new FormControl('',Validators.required),
      headquarters: new FormControl('',Validators.required), 
      county : new FormControl('',Validators.required),
      bank : new FormControl('',Validators.required)
    });
  }

  submitRegistration(){
    if(this.fiscalBillForm?.valid){
      this.validMessage = "Your fiscal bill registration has been submitted. Thank you!";
      this.fiscalBillService.addFiscalBill(this.fiscalBillForm.value).subscribe(
        _data => {
          this.fiscalBillForm?.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
