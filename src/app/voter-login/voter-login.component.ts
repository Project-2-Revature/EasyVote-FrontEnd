import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VoterModel } from '../voter-model';
import { VotingService } from '../voting.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.css'],
  // template:"<h2>{{Voter.id}}</h2>"
})
export class VoterLoginComponent{
  vot=new VoterModel();
  vot1=new VoterModel();
  constructor(private service:VotingService,private router: Router){}
  
 public loginVoterAngular(){
   if(localStorage.getItem("Election")){
  this.service.loginVoter(this.vot).subscribe(res=>{
      localStorage.setItem("Login","Active"); 
        this.vot1=res;
         this.vot1.status=true;
         console.log(this.vot1);
         this.service.updateVoter(this.vot1).subscribe();
         this.router.navigate(['/VotePage']);
  })}
  else{
    console.log("Election not yet started");
  }
 }
}