import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterRegistrationComponent } from './voter-registration/voter-registration.component';
import { VoterLoginComponent } from './voter-login/voter-login.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { ViewResultsComponent } from './view-results/view-results.component';
import { ContestantRegistrationComponent } from './contestant-registration/contestant-registration.component';
import { UpdateContestantComponent } from './update-contestant/update-contestant.component';
import { DeleteContestantComponent } from './delete-contestant/delete-contestant.component';
import { ViewVotersComponent } from './view-voters/view-voters.component';
import { UpdateVotersComponent } from './update-voters/update-voters.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VoterComponent } from './voter/voter.component';
import { AdminComponent } from './admin/admin.component';
import { ContestantComponent } from './contestant/contestant.component';
import { VotingService } from './voting.service';
import { VoterModel } from './voter-model';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterRegistrationComponent,
    VoterLoginComponent,
    VotePageComponent,
    ViewResultsComponent,
    ContestantRegistrationComponent,
    UpdateContestantComponent,
    DeleteContestantComponent,
    ViewVotersComponent,
    UpdateVotersComponent,
    AdminLoginComponent,
    ViewVotersComponent,
    VoterComponent,
    AdminComponent,
    ContestantComponent,
    HomeComponent,
    routingComponents

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [
    VotingService,VoterRegistrationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
