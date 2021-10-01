import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VotingService } from '../voting.service';

import { DeleteContestantComponent } from './delete-contestant.component';

describe('DeleteContestantComponent', () => {
  let component: DeleteContestantComponent;
  let fixture: ComponentFixture<DeleteContestantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContestantComponent ],
      imports:[FormsModule,RouterTestingModule,HttpClientModule],
      providers:[VotingService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
