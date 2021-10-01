import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContestantRegistrationComponent } from './contestant-registration/contestant-registration.component';
import { ContestantComponent } from './contestant/contestant.component';
import { DeleteContestantComponent } from './delete-contestant/delete-contestant.component';
import { UpdateContestantComponent } from './update-contestant/update-contestant.component';
import { UpdateVotersComponent } from './update-voters/update-voters.component';
import { ViewVotersComponent } from './view-voters/view-voters.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { VoterLoginComponent } from './voter-login/voter-login.component';
import { VoterRegistrationComponent } from './voter-registration/voter-registration.component';
import { VoterComponent } from './voter/voter.component';
import { AdminComponent } from './admin/admin.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // {path:'',redirectTo:'VoterLogin',pathMatch:'full'},
  {path:'VoterLogin',component:VoterLoginComponent},
  {path:'VoterRegistration',component:VoterRegistrationComponent},
  {path:'ContestantRegistration',component:ContestantRegistrationComponent},
  {path:'DeleteContestant',component:DeleteContestantComponent},
  {path:'UpdateContestant',component:UpdateContestantComponent},
  {path:'VotePage',component:VotePageComponent},
  {path:'UpdateVoter',component:UpdateVotersComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'ViewVoters',component:ViewVotersComponent},
  {path:'Voter',component:VoterComponent},
  {path:'Contestant',component:ContestantComponent},
  {path:'Admin',component:AdminComponent},
  {path:'Results',component:ViewResultsComponent},
  {path:'', pathMatch: 'full' , component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]

