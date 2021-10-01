import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContestantModel } from '../contestant-model';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-contestant-registration',
  templateUrl: './contestant-registration.component.html',
  styleUrls: ['./contestant-registration.component.css'],
  template:"<h3>Contestant Registered Successfully</h3>"
})
export class ContestantRegistrationComponent {
  message!:string;
cont=new ContestantModel();
  constructor(private service:VotingService,private router: Router) { }
  public registerContestantAngular(){
    this.service.registerContestant(this.cont).subscribe(res=>{
      this.cont=res;
      this.message="Contestant with id :"+this.cont.id+` registered successfully,
Please note your ID for further reference`;
        alert(this.message);
      this.cont=new ContestantModel();
     
    })
  }
}
