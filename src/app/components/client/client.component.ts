import { ClientService } from './../../services/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
clientList:any;

clientForm !: FormGroup;
validMessage : string ="";
readonly:boolean =false;
  route: any;
  isAddMode: boolean=false;
  public clientRegistration:any;


  constructor(private clientService:ClientService) { }

  
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;         
    this.isAddMode = !id;
    
this.clientForm = new FormGroup({
  name :new FormControl('',Validators.required),
  county:new FormControl('',Validators.required),
  cif:new FormControl('',Validators.required),
  telephone:new FormControl('',Validators.required),
  address:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),

});
if(!this.isAddMode) {
  this.clientService.getClient(id)
    .pipe(first())
    .subscribe(x => this.clientForm.patchValue(x))
}

  }

  submitRegistration(){
    let id = this.route.snapshot.params.id;
    // if(this.billsform?.valid){
    //   this.validMessage = "Your invoice registration has been submitted. Thank you!";
    if(id) this.clientService.updateClientById(id, this.clientForm.value);
    else this.clientService.addClient(this.clientForm.value).subscribe();
    
  }

  
  getClientRegistration(id:number){
    this.clientService.getClient(id).subscribe(
      data=>{this.clientRegistration = data;
      },
      err=>console.error(err),
      ()=>console.log('clients loaded')
    );
  }

  get ClientName() {
    return this.clientForm.get('name');
  }

}
