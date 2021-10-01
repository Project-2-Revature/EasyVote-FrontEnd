import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContestantModel } from '../contestant-model';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-delete-contestant',
  templateUrl: './delete-contestant.component.html',
  styleUrls: ['./delete-contestant.component.css']
})
export class DeleteContestantComponent {
  message!:string;
cont =new ContestantModel();
  constructor(private service:VotingService,private router: Router){  }
  public deleteContestantAngular(){
    this.service.deleteContestant(this.cont.id).subscribe(res=>
      {
        this.message="Contestant with contestant id :"+this.cont.id+" deleted successfully";
        alert(this.message);
      })
    }
}
