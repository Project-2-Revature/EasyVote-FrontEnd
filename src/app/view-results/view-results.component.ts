import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContestantModel } from '../contestant-model';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css']
})
export class ViewResultsComponent implements OnInit {
    cont!:ContestantModel[];
    cont2=new ContestantModel();
    constructor(private service:VotingService,private router: Router){ } 
    is:boolean=false;
    ngOnInit() {
      if(localStorage.getItem("Results")){
       this.is=true;
      this.service.getContestants()
      .subscribe(res=>{this.cont=res;})
    }
  }
  }

