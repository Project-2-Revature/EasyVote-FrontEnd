import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VoterModel } from '../voter-model';
import { Observable } from 'rxjs';
import { VotingService } from '../voting.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-voters',
  templateUrl: './view-voters.component.html',
  styleUrls: ['./view-voters.component.css']
})
export class ViewVotersComponent implements OnInit{
   vot!:VoterModel[];
  constructor(private service:VotingService,private router: Router){ } 
  ngOnInit(){
      this.service.getVoters().subscribe(res=>{this.vot=res;})
  }
}