import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VoterModel } from './voter-model';
import { ContestantModel } from './contestant-model';
@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url="http://localhost:7000";
   } 
   public registerVoter(vot:VoterModel):Observable<any>{
     return this.http.post<any>("http://localhost:7000/voter",vot);
   }
   public loginVoter(vot:VoterModel):Observable<VoterModel>{
    return this.http.post<VoterModel>("http://localhost:7000/voterlogin",vot);
  }
  public registerContestant(cont:ContestantModel):Observable<any>{
    return this.http.post<any>("http://localhost:7000/contestant",cont);
  }
  public deleteContestant(Id:number){
    return this.http.delete<ContestantModel>("http://localhost:7000/contestant/"+Id);
  }
  public getVoters():Observable<VoterModel[]>{
    return this.http.get<VoterModel[]>("http://localhost:7000/voters");
  }
  public getContestants():Observable<ContestantModel[]>{
    return this.http.get<ContestantModel[]>("http://localhost:7000/contestants");
  }
  public updateContestant(cont:ContestantModel):Observable<ContestantModel>{
    return this.http.put<ContestantModel>("http://localhost:7000/contestant",cont);
  }
  public updateVoter(vot:VoterModel):Observable<VoterModel>{
    return this.http.put<VoterModel>("http://localhost:7000/voter",vot);
  }
}