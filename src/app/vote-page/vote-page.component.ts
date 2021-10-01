import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContestantModel } from '../contestant-model';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.css']
})
export class VotePageComponent implements OnInit {
  cont!:ContestantModel[];
  cont2=new ContestantModel();
  constructor(private service:VotingService,private router: Router){ } 
  ngOnInit() {
    if(!localStorage.getItem("Login")){
    this.router.navigate(["/VoterRegistration"]);}
    else{
    this.service.getContestants()
    .subscribe(res=>{this.cont=res;})}
  }
  public voteInc(ide:number,vote:number,aN:number){
     this.cont2.id=ide;
     this.cont2.voteCount=vote+1;
     this.cont2.aadhaarNumber=aN;
    this.service.updateContestant(this.cont2).subscribe(res=>{
      localStorage.removeItem("Login");
      this.router.navigate(['/VoterLogin']);
    })
  }
}
