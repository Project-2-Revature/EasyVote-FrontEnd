import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-contestant',
  templateUrl: './update-contestant.component.html',
  styleUrls: ['./update-contestant.component.css']
})
export class UpdateContestantComponent  {

  constructor() { }
  startElections(){
    localStorage.setItem("Election","Active");
  }
  stopElections(){
    localStorage.removeItem("Election");
  }
  publishResults(){
    localStorage.setItem("Results","Active");
  }
  stopResults(){
    localStorage.removeItem("Results");
  }
}
