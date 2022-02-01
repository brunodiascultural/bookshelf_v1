import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibularesComponent } from './vestibulares.component';

describe('VestibularesComponent', () => {
  let component: VestibularesComponent;
  let fixture: ComponentFixture<VestibularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
