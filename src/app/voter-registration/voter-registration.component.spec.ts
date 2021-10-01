import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VotingService } from '../voting.service';

import { VoterRegistrationComponent } from './voter-registration.component';

describe('VoterRegistrationComponent', () => {
  let component: VoterRegistrationComponent;
  let fixture: ComponentFixture<VoterRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterRegistrationComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[VotingService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
