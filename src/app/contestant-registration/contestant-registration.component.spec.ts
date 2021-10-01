import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VotingService } from '../voting.service';

import { ContestantRegistrationComponent } from './contestant-registration.component';

describe('ContestantRegistrationComponent', () => {
  let component: ContestantRegistrationComponent;
  let fixture: ComponentFixture<ContestantRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestantRegistrationComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[VotingService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestantRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
