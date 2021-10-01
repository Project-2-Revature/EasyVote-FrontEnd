import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VotingService } from '../voting.service';

import { UpdateVotersComponent } from './update-voters.component';

describe('UpdateVotersComponent', () => {
  let component: UpdateVotersComponent;
  let fixture: ComponentFixture<UpdateVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVotersComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[VotingService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
