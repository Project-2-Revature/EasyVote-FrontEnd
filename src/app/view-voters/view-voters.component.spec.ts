import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VotingService } from '../voting.service';

import { ViewVotersComponent } from './view-voters.component';

describe('ViewVotersComponent', () => {
  let component: ViewVotersComponent;
  let fixture: ComponentFixture<ViewVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVotersComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[VotingService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
