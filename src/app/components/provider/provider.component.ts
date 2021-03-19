import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from './../../services/provider.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  providerForm=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    cif: new FormControl('',Validators.required),
    country : new FormControl('',Validators.required),
    bank : new FormControl('',Validators.required),
    iban : new FormControl('',Validators.required),
    telephone:  new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });
  
  providerList: any;
  validMessage: string = "";
  
  readonly:boolean =false;
    isAddMode: boolean=false;
    public providerRegistration:any;

  constructor(private providerService:ProviderService, private route:ActivatedRoute) {
    // this.providerService.getProviders().subscribe(provider=>this.providerList=provider);

  }

  ngOnInit(): void {
      let id = this.route.snapshot.params.id;
    this.isAddMode = !id; 
  
    if(!this.isAddMode) {
      this.providerService.getProvidersById(id)
      .pipe(first())
      .subscribe(x => this.providerForm.patchValue(x))
} 

    
  }
  submitRegistration(){
    let id = this.route.snapshot.params.id;
    // if(this.billsform?.valid){
    //   this.validMessage = "Your invoice registration has been submitted. Thank you!";
    if(id) this.providerService.updateProviderById(id, this.providerForm.value);
    
    else this.providerService.addProvider(this.providerForm.value).subscribe();
  }

  getProviderRegistration(id:number){
    this.providerService.getProvidersById(id).subscribe(
      data=>{this.providerRegistration = data;
      },
      err=>console.error(err),
      ()=>console.log('clients loaded')
    );
  }
}
